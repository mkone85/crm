module.exports = {
  name: 'modular-crm-hosting',
  version: '1.0.0',
  type: 'fullstack',
  
  // Development configuration
  dev: {
    backend: {
      port: 3001,
      host: 'localhost',
      env: 'development'
    },
    frontend: {
      port: 3000,
      host: 'localhost',
      proxy: 'http://localhost:3001'
    },
    database: {
      host: 'localhost',
      port: 5432,
      database: 'crm_dev',
      ssl: false
    }
  },

  // Production configuration
  production: {
    backend: {
      port: process.env.PORT || 3001,
      host: '0.0.0.0',
      env: 'production'
    },
    frontend: {
      build: true,
      static: true
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      ssl: true
    }
  },

  // Module system configuration
  modules: {
    path: './modules',
    autoload: true,
    registry: './modules/registry.json'
  },

  // Self-hosting configuration
  selfHosting: {
    installer: './installer',
    licenseCheck: true,
    updateSystem: 'package'
  },

  // SaaS configuration
  saas: {
    multiTenant: true,
    autoUpdates: true,
    moduleActivation: 'subscription'
  }
};
