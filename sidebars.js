module.exports = {
  overview: {
    Overview: ['overview/introduction', 'overview/firstEmail'],
    Integrations: [
      {
        "HTTP API": [
          'reference/overview',
          'reference/authentication',
          'reference/headers',
          'reference/send',
          'reference/responses'
        ]
      },
      'integrations/smtp',
      'integrations/rails',
      'integrations/node',
      { 
        "PHP": [
          'integrations/php/swiftmailer',
          'integrations/php/symfony',
        ]
      },
      'integrations/go',
      'integrations/rust',
      "integrations/elixir",
      'integrations/fastify',
    ],
    Guides: ['guide/lifecycle', 'guide/blocklist', 'guide/verification', 'guide/webhooks', 'guide/inbound'],
  }
};