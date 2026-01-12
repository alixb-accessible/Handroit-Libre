// Handipass - Application principale
let loadedThemeData = {};
let loadedLetterTemplates = {};
let currentCourrierType = '';
let currentCourrierData = {};

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Vérifier l'authentification
    if (!isUserAuthenticated()) {
        document.getElementById('auth-wall').style.display = 'flex';
        document.getElementById('main-site').style.display = 'none';
    } else {
        document.getElementById('auth-wall').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
        
        // Afficher l'email de l'utilisateur
        const userEmail = getCurrentUserEmail();
        if (userEmail) {
            document.getElementById('user-email').textContent = userEmail;
        }
        
        // Charger les données
        loadData();
        
        // Initialiser la recherche
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch(searchInput.value);
                }
            });
        }
    }
}

// Charger les données depuis les fichiers JS
function loadData() {
    loadedThemeData = typeof themeData !== 'undefined' ? themeData : {};
    loadedLetterTemplates = typeof letterTemplates !== 'undefined' ? letterTemplates : {};
    
    // Générer les grilles de thématiques
    generateThemesGrids();
    generateCourriersGrid();
}

// Générer les grilles de thématiques par catégorie
function generateThemesGrids() {
    const categories = {
        1: ['mdph', 'aah', 'pch', 'invalidite', 'retraite'],
        2: ['emploi', 'scolarite', 'parentalite', 'ase'],
        3: ['accessibilite', 'braille', 'lsf', 'chiens', 'numerique'],
        4: ['arnaques', 'maltraitance', 'asso-gestionnaires', 'discrimination']
    };
    
    Object.keys(categories).forEach(catNum => {
        const grid = document.getElementById(`themes-grid-${catNum}`);
        if (!grid) return;
        
        grid.innerHTML = '';
        categories[catNum].forEach(themeId => {
            if (loadedThemeData[themeId]) {
                const theme = loadedThemeData[themeId];
                const isRestricted = theme.restricted === true;
                
                const card = document.createElement('button');
                card.className = 'theme-card' + (isRestricted ? ' locked-theme' : '');
                if (themeId === 'arnaques' || themeId === 'maltraitance') {
                    card.classList.add('alert');
                }
                
                card.onclick = () => isRestricted ? showLockedMessage() : showTheme(themeId);
                
                card.innerHTML = `
                    <h3>${theme.title}</h3>
                    <p>${theme.description || ''}</p>
                `;
                
                grid.appendChild(card);
            }
        });
    });
}

// Générer la grille des courriers
function generateCourriersGrid() {
    const grid = document.getElementById('courriers-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.keys(loadedLetterTemplates).forEach(courrierId => {
        const courrier = loadedLetterTemplates[courrierId];
        const isRestricted = courrier.restricted === true;
        
        const btn = document.createElement('button');
        btn.className = 'action-btn' + (isRestricted ? ' locked-theme' : '');
        btn.onclick = () => isRestricted ? showLockedMessage() : selectCourrier(courrierId);
        btn.textContent = courrier.title;
        
        grid.appendChild(btn);
    });
}

// Afficher un message pour contenu verrouillé
function showLockedMessage() {
    alert('Ce contenu est réservé aux membres inscrits. Vous êtes déjà connecté, ce contenu sera bientôt disponible.');
}

// Auth tabs
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    if (tab === 'signup') {
        document.getElementById('tab-signup').classList.add('active');
        document.getElementById('signup-form').classList.add('active');
    } else {
        document.getElementById('tab-login').classList.add('active');
        document.getElementById('login-form').classList.add('active');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const captcha = document.getElementById('signup-captcha').value;
    
    const result = signup(email, captcha);
    
    if (result.success) {
        window.location.reload();
    } else {
        const errorDiv = document.getElementById('signup-error');
        errorDiv.textContent = result.error;
        errorDiv.classList.add('show');
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    
    const result = login(email);
    
    if (result.success) {
        window.location.reload();
    } else {
        const errorDiv = document.getElementById('login-error');
        errorDiv.textContent = result.error;
        errorDiv.classList.add('show');
    }
}

// Navigation
function showTheme(themeId) {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    const contentArea = document.getElementById('content-area');
    
    homeSection.style.display = 'none';
    generatorSection.classList.remove('active');
    contentSection.classList.add('active');
    
    if (loadedThemeData[themeId]) {
        contentArea.innerHTML = `
            <h2>${loadedThemeData[themeId].title}</h2>
            ${loadedThemeData[themeId].content}
        `;
    } else {
        contentArea.innerHTML = `
            <h2>Thématique en construction</h2>
            <p>Cette section est en cours de développement.</p>
        `;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGenerator() {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    
    homeSection.style.display = 'none';
    contentSection.classList.remove('active');
    generatorSection.classList.add('active');
    
    document.getElementById('courrier-selection').style.display = 'block';
    document.getElementById('courrier-form').style.display = 'none';
    document.getElementById('letter-output').style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToHome() {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    
    homeSection.style.display = 'block';
    contentSection.classList.remove('active');
    generatorSection.classList.remove('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Courriers personnalisés
function selectCourrier(courrierType) {
    currentCourrierType = courrierType;
    
    if (!loadedLetterTemplates[courrierType]) {
        alert('Ce modèle est en cours de développement.');
        return;
    }
    
    const template = loadedLetterTemplates[courrierType].template;
    const variables = extractVariables(template);
    
    document.getElementById('form-title').textContent = loadedLetterTemplates[courrierType].title;
    
    const dynamicFields = document.getElementById('dynamic-fields');
    dynamicFields.innerHTML = '';
    
    variables.forEach(variable => {
        const field = createFormField(variable);
        dynamicFields.appendChild(field);
    });
    
    document.getElementById('courrier-selection').style.display = 'none';
    document.getElementById('courrier-form').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function extractVariables(template) {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(template)) !== null) {
        if (!matches.includes(match[1])) {
            matches.push(match[1]);
        }
    }
    
    return matches;
}

function createFormField(variableName) {
    const div = document.createElement('div');
    div.className = 'form-field';
    
    const label = document.createElement('label');
    label.setAttribute('for', variableName);
    label.textContent = formatFieldLabel(variableName);
    
    let input;
    if (variableName.includes('motif') || variableName.includes('description') || variableName.includes('raison')) {
        input = document.createElement('textarea');
    } else {
        input = document.createElement('input');
        input.type = 'text';
    }
    
    input.id = variableName;
    input.name = variableName;
    input.required = true;
    input.placeholder = getFieldPlaceholder(variableName);
    
    div.appendChild(label);
    div.appendChild(input);
    
    const help = getFieldHelp(variableName);
    if (help) {
        const small = document.createElement('small');
        small.textContent = help;
        div.appendChild(small);
    }
    
    return div;
}

function formatFieldLabel(variableName) {
    const labels = {
        'nom': 'Nom et prénom',
        'prenom': 'Prénom',
        'adresse': 'Adresse',
        'code_postal': 'Code postal',
        'ville': 'Ville',
        'telephone': 'Téléphone',
        'email': 'Email',
        'numero_decision': 'Numéro de la décision',
        'date_decision': 'Date de la décision',
        'date_notification': 'Date de notification',
        'departement': 'Département',
        'motif': 'Motif / Arguments',
        'description': 'Description des faits',
        'nom_enfant': 'Nom de l\'enfant',
        'date_naissance_enfant': 'Date de naissance de l\'enfant',
        'etablissement': 'Nom de l\'établissement',
        'adresse_etablissement': 'Adresse de l\'établissement'
    };
    
    return labels[variableName] || variableName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function getFieldPlaceholder(variableName) {
    const placeholders = {
        'nom': 'ex: Dupont Marie',
        'adresse': 'ex: 12 rue de la République',
        'code_postal': 'ex: 59000',
        'ville': 'ex: Lille',
        'telephone': 'ex: 06 12 34 56 78',
        'email': 'ex: marie.dupont@email.fr',
        'numero_decision': 'ex: 2024-12345',
        'date_decision': 'ex: 15 novembre 2024',
        'departement': 'ex: Nord',
        'motif': 'Expliquez les raisons...'
    };
    
    return placeholders[variableName] || '';
}

function getFieldHelp(variableName) {
    const helps = {
        'numero_decision': 'Numéro sur la notification MDPH',
        'date_notification': 'Date de réception de la décision',
        'motif': 'Développez vos arguments factuels'
    };
    
    return helps[variableName] || '';
}

function generatePersonalizedLetter(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    currentCourrierData = {};
    
    for (let [key, value] of formData.entries()) {
        currentCourrierData[key] = value;
    }
    
    const template = loadedLetterTemplates[currentCourrierType].template;
    let personalizedLetter = template;
    
    for (let [key, value] of Object.entries(currentCourrierData)) {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        personalizedLetter = personalizedLetter.replace(regex, value);
    }
    
    document.getElementById('letter-text').textContent = personalizedLetter;
    document.getElementById('courrier-form').style.display = 'none';
    document.getElementById('letter-output').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToCourrierSelection() {
    document.getElementById('courrier-form').style.display = 'none';
    document.getElementById('courrier-selection').style.display = 'block';
}

function backToCourrierForm() {
    for (let [key, value] of Object.entries(currentCourrierData)) {
        const field = document.getElementById(key);
        if (field) field.value = value;
    }
    
    document.getElementById('letter-output').style.display = 'none';
    document.getElementById('courrier-form').style.display = 'block';
}

function copyLetter() {
    const letterText = document.getElementById('letter-text');
    const text = letterText.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copié !';
        copyBtn.style.background = '#22c55e';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(() => {
        alert('Erreur lors de la copie.');
    });
}

// Recherche
function performSearch(query) {
    if (!query || query.trim() === '') return;
    
    const lowerQuery = query.toLowerCase().trim();
    
    const keywords = {
        'mdph': 'mdph', 'aah': 'aah', 'pch': 'pch',
        'invalidité': 'invalidite', 'retraite': 'retraite',
        'emploi': 'emploi', 'rqth': 'emploi',
        'scolarité': 'scolarite', 'aesh': 'scolarite',
        'parentalité': 'parentalite', 'ase': 'ase',
        'accessibilité': 'accessibilite', 'braille': 'braille',
        'lsf': 'lsf', 'chien': 'chiens',
        'numérique': 'numerique', 'rgaa': 'numerique',
        'arnaque': 'arnaques', 'maltraitance': 'maltraitance',
        'discrimination': 'discrimination'
    };
    
    let foundTheme = null;
    for (const [keyword, theme] of Object.entries(keywords)) {
        if (lowerQuery.includes(keyword)) {
            foundTheme = theme;
            break;
        }
    }
    
    if (foundTheme) {
        showTheme(foundTheme);
    } else {
        alert(`Aucun résultat pour "${query}".`);
    }
}
// Mentions légales
function showMentions() {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    const mentionsSection = document.getElementById('mentions-section');
    
    if (homeSection) homeSection.style.display = 'none';
    if (contentSection) contentSection.classList.remove('active');
    if (generatorSection) generatorSection.classList.remove('active');
    if (mentionsSection) mentionsSection.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMentions() {
    const homeSection = document.getElementById('home-section');
    const mentionsSection = document.getElementById('mentions-section');
    
    if (mentionsSection) mentionsSection.style.display = 'none';
    if (homeSection) homeSection.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
