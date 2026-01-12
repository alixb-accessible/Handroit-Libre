// Système d'authentification pour Handipass
// Gestion des inscriptions et connexions

// Blacklist des domaines (associations gestionnaires)
const BLACKLISTED_DOMAINS = [
    'apf.asso.fr',
    'unapei.org',
    'adapei',  // Wildcard pour toutes les ADAPEI
    'apajh.org',
    'croix-rouge.fr',
    'arcat.asso.fr',
    'areams.fr',
    'ari-france.org',
    'atc.asso.fr',
    'cemea.asso.fr',
    'clubhouse-france.org',
    'empreinte.asso.fr',
    'habitat-humanisme.org',
    'handident.fr',
    'handivillage.org',
    'oeuvre-falret.asso.fr',
    'fondationjohnbost.fr',
    'fondationpartage.org',
    'fondationdenice.org',
    'messidor.asso.fr',
    'ladapt.net',
    'sesame-autisme.com',
    'autisme-france.fr',
    'geist.org',
    'handilaw.fr',
    'handroit.com'
];

// Vérifier si l'utilisateur est connecté
function isUserAuthenticated() {
    const authData = localStorage.getItem('handipass_auth');
    if (!authData) return false;
    
    try {
        const data = JSON.parse(authData);
        // Vérifier que la session n'a pas expiré (30 jours)
        const expirationDate = new Date(data.expiration);
        return new Date() < expirationDate;
    } catch {
        return false;
    }
}

// Vérifier si un domaine email est blacklisté
function isEmailBlacklisted(email) {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return true;
    
    // Autoriser les domaines email courants (perso)
    const allowedDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'yahoo.fr', 'orange.fr', 'free.fr', 'wanadoo.fr', 'laposte.net', 'icloud.com', 'protonmail.com'];
    if (allowedDomains.includes(domain)) return false;
    
    // Vérifier la blacklist
    return BLACKLISTED_DOMAINS.some(blocked => domain.includes(blocked));
}

// Inscription
function signup(email, captchaAnswer) {
    // Vérifier le captcha
    if (captchaAnswer !== '8') {
        return { success: false, error: 'Réponse incorrecte à la question anti-robot.' };
    }
    
    // Vérifier si l'email est blacklisté
    if (isEmailBlacklisted(email)) {
        return { success: false, error: 'Les adresses email professionnelles d\'établissements ne sont pas autorisées. Veuillez utiliser une adresse email personnelle.' };
    }
    
    // Vérifier si déjà inscrit
    const existingUsers = JSON.parse(localStorage.getItem('handipass_users') || '[]');
    if (existingUsers.includes(email)) {
        return { success: false, error: 'Cet email est déjà inscrit. Veuillez vous connecter.' };
    }
    
    // Ajouter l'utilisateur
    existingUsers.push(email);
    localStorage.setItem('handipass_users', JSON.stringify(existingUsers));
    
    // Créer la session
    const authData = {
        email: email,
        expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 jours
    };
    localStorage.setItem('handipass_auth', JSON.stringify(authData));
    
    return { success: true };
}

// Connexion
function login(email) {
    const existingUsers = JSON.parse(localStorage.getItem('handipass_users') || '[]');
    
    if (!existingUsers.includes(email)) {
        return { success: false, error: 'Email non reconnu. Veuillez vous inscrire d\'abord.' };
    }
    
    // Créer la session
    const authData = {
        email: email,
        expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    localStorage.setItem('handipass_auth', JSON.stringify(authData));
    
    return { success: true };
}

// Déconnexion
function logout() {
    localStorage.removeItem('handipass_auth');
    window.location.reload();
}

// Obtenir l'email de l'utilisateur connecté
function getCurrentUserEmail() {
    const authData = localStorage.getItem('handipass_auth');
    if (!authData) return null;
    
    try {
        const data = JSON.parse(authData);
        return data.email;
    } catch {
        return null;
    }
}
