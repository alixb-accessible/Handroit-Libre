const { Octokit } = require("@octokit/rest");

exports.handler = async (event) => {
  // Vérifier la méthode
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { filename, content, password } = JSON.parse(event.body);

    // Vérifier le mot de passe
    if (password !== process.env.ADMIN_PASSWORD) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Mot de passe incorrect' })
      };
    }

    // Initialiser Octokit avec le token GitHub
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'alixb-accessible';
    const repo = 'Handipass';
    const path = filename;

    // Récupérer le SHA du fichier actuel
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path
      });
      sha = data.sha;
    } catch (error) {
      // Fichier n'existe pas encore
      sha = null;
    }

    // Mettre à jour ou créer le fichier
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Update ${filename} via admin interface`,
      content: Buffer.from(content).toString('base64'),
      sha: sha || undefined
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
