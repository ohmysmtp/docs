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
      { NodeJS: require('./typedoc-sidebar.js') },
      { "SMTP Server": ['integrations/smtp'] },
    ],
    Guide: ['guide/lifecycle', 'guide/blocklist'],
  }
};