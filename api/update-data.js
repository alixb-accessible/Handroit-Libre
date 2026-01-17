const { Octokit } = require("@octokit/rest");

module.exports = async (req, res) => {
  // Autoriser CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, content, password } = req.body;

    // Vérifier le mot de passe
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    // Initialiser Octokit
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'alixb-accessible';
    const repo = 'Handipass';
    const path = filename;

    // Récupérer le SHA du fichier
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path
      });
      sha = data.sha;
    } catch (error) {
      sha = null;
    }

    // Mettre à jour le fichier
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Update ${filename} via admin`,
      content: Buffer.from(content).toString('base64'),
      sha: sha || undefined
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
