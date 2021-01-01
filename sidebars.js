module.exports = {
  overview: {
    Overview: ['overview/introduction', 'overview/firstEmail'],
    "API Reference": [
      'reference/overview',
      'reference/authentication',
      'reference/headers',
      'reference/send',
      'reference/responses'
    ],
    // "User Guide": ['guide/bounces', 'guide/blocklist', 'guide/verification'],
    "Ruby on Rails": ['integrations/rails'],
    NodeJS: require('./typedoc-sidebar.js')
  }
};