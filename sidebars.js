module.exports = {
  overview: {
    Overview: ['overview/introduction', 'overview/firstEmail'],
    Integrations: [
      { "HTTP API": [
        'reference/overview',
        'reference/authentication',
        'reference/headers',
        'reference/send',
        'reference/responses'
      ] },
      { "Ruby on Rails": ['integrations/rails'] },
      { "Node.js": ['integrations/node'] },
      { "PHP": ['integrations/php'] },
      { "SMTP Server": ['integrations/smtp'] },
    ],
    Guide: ['guide/lifecycle', 'guide/blocklist'],
  }
};