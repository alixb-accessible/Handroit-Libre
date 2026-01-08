// Navigation entre sections
function showTheme(themeId) {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    const contentArea = document.getElementById('content-area');
    
    // Masquer toutes les sections
    homeSection.style.display = 'none';
    generatorSection.classList.remove('active');
    
    // Afficher la section de contenu
    contentSection.classList.add('active');
    
    // Charger le contenu du thème
    if (themeData[themeId]) {
        contentArea.innerHTML = `
            <h2>${themeData[themeId].title}</h2>
            ${themeData[themeId].content}
        `;
    } else {
        contentArea.innerHTML = `
            <h2>Thématique en construction</h2>
            <p>Cette section est en cours de développement. Le contenu sera ajouté prochainement.</p>
            <p>N'hésitez pas à contribuer au projet sur GitHub !</p>
        `;
    }
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGenerator() {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    const letterOutput = document.getElementById('letter-output');
    
    // Masquer les autres sections
    homeSection.style.display = 'none';
    contentSection.classList.remove('active');
    
    // Afficher le générateur
    generatorSection.classList.add('active');
    
    // Masquer le résultat
    letterOutput.classList.remove('active');
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToHome() {
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const generatorSection = document.getElementById('generator-section');
    
    // Afficher l'accueil
    homeSection.style.display = 'block';
    
    // Masquer les autres
    contentSection.classList.remove('active');
    generatorSection.classList.remove('active');
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Générateur de courriers
function generateLetter(letterType) {
    const letterOutput = document.getElementById('letter-output');
    const letterText = document.getElementById('letter-text');
    
    if (letterTemplates[letterType]) {
        letterText.textContent = letterTemplates[letterType].template;
        letterOutput.classList.add('active');
        
        // Scroll vers le courrier
        letterOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        letterText.textContent = 'Ce modèle de courrier est en cours de développement.';
        letterOutput.classList.add('active');
    }
}

function copyLetter() {
    const letterText = document.getElementById('letter-text');
    const text = letterText.textContent;
    
    // Copier dans le presse-papiers
    navigator.clipboard.writeText(text).then(() => {
        // Feedback visuel
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copié !';
        copyBtn.style.background = '#22c55e';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Erreur lors de la copie. Veuillez sélectionner et copier manuellement le texte.');
    });
}

// Recherche (fonction de base à améliorer)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
});

function performSearch(query) {
    if (!query || query.trim() === '') {
        return;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    // Mots-clés vers thèmes
    const keywords = {
        'mdph': 'mdph',
        'maison départementale': 'mdph',
        'cdaph': 'mdph',
        'aah': 'aah',
        'allocation': 'aah',
        'adulte handicapé': 'aah',
        'pch': 'pch',
        'prestation': 'pch',
        'compensation': 'pch',
        'aide humaine': 'pch',
        'invalidité': 'invalidite',
        'pension': 'invalidite',
        'retraite': 'retraite',
        'anticipée': 'retraite',
        'emploi': 'emploi',
        'rqth': 'emploi',
        'travailleur handicapé': 'emploi',
        'travail': 'emploi',
        'scolarité': 'scolarite',
        'scolarisation': 'scolarite',
        'école': 'scolarite',
        'aesh': 'scolarite',
        'pps': 'scolarite',
        'parentalité': 'parentalite',
        'parent': 'parentalite',
        'ase': 'ase',
        'placement': 'ase',
        'enfant': 'ase',
        'accessibilité': 'accessibilite',
        'accessible': 'accessibilite',
        'logement': 'accessibilite',
        'braille': 'braille',
        'lsf': 'lsf',
        'langue des signes': 'lsf',
        'interprète': 'lsf',
        'chien': 'chiens',
        'assistance': 'chiens',
        'numérique': 'numerique',
        'rgaa': 'numerique',
        'arnaque': 'arnaques',
        'javel': 'arnaques',
        'mms': 'arnaques',
        'aba': 'arnaques',
        'teacch': 'arnaques',
        'maltraitance': 'maltraitance',
        'association gestionnaire': 'asso-gestionnaires',
        'discrimination': 'discrimination',
        'recours': 'mdph',
        'défenseur': 'discrimination'
    };
    
    // Trouver la correspondance
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
        alert(`Aucun résultat trouvé pour "${query}". Essayez des mots-clés comme : AAH, MDPH, PCH, emploi, scolarisation, accessibilité, etc.`);
    }
}
