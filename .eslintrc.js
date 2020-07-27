module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    // 'plugin:vue-i18n/recommended',
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'quote-props': ['error', 'consistent-as-needed'],
    'vue/match-component-file-name': ['error', { extensions: ['vue'] }],
    /* 'vue-i18n/no-raw-text': ['warn', {
      ignoreNodes: ['v-icon'],
      ignorePattern: '^([\\W\\d\\s]+|\\w+@\\w+\\.\\w+)$',
      ignoreText: ['©'],
    }], */
  },
  settings: {
    /* 'vue-i18n': {
      localeDir: './locales/*.json',
    }, */
  },
};
