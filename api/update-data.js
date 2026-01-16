// Backend Vercel - Modification automatique des fichiers GitHub

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // Format: "username/repo"

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    try {
        const { filename, content, password } = req.body;

        // Vérifier le mot de passe admin
        if (password !== 'HandipassAdmin2026') {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        // Vérifier les variables d'environnement
        if (!GITHUB_TOKEN || !GITHUB_REPO) {
            return res.status(500).json({ 
                error: 'Configuration serveur incomplète',
                success: false 
            });
        }

        // Récupérer le SHA actuel du fichier (nécessaire pour la mise à jour)
        const getFileUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filename}`;
        const getResponse = await fetch(getFileUrl, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        let sha = null;
        if (getResponse.ok) {
            const fileData = await getResponse.json();
            sha = fileData.sha;
        }

        // Encoder le contenu en base64
        const contentBase64 = Buffer.from(content).toString('base64');

        // Mettre à jour le fichier sur GitHub
        const updateUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filename}`;
        const updateResponse = await fetch(updateUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Update ${filename} from admin`,
                content: contentBase64,
                sha: sha,
                branch: 'main'
            })
        });

        if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error('Erreur GitHub:', updateResponse.status, errorText);
            return res.status(updateResponse.status).json({ 
                error: `Erreur GitHub: ${updateResponse.status}`,
                details: errorText,
                success: false 
            });
        }

        const result = await updateResponse.json();
        return res.status(200).json({ 
            success: true,
            message: 'Fichier mis à jour avec succès',
            commit: result.commit
        });

    } catch (error) {
        console.error('Erreur serveur:', error);
        return res.status(500).json({ 
            error: 'Erreur serveur',
            message: error.message,
            success: false 
        });
    }
}
