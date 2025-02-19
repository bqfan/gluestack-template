import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    // React plugin configuration
    plugins: {
      react: reactPlugin,
    },
    rules: reactPlugin.configs.recommended.rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    // React Hooks plugin configuration
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    // TypeScript ESLint configuration
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: typescriptEslintPlugin.configs.recommended.rules,
  },
  {
    // Environment configuration
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    // Prettier configuration
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      // 'prettier/prettier': 'error',
      'prettier/prettier': [
        0,
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    // Custom rules
    rules: {
      // 'quotes': ['error', 'single', { avoidEscape: true }],
      // 'semi': ['error', 'never'],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'no-undef': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    },
  },
  {
    // JavaScript overrides
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      'src/components/ui/*',
      '**/android/**',
      '**/ios/**',
      '**/web-build/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/.expo/**',
    ],
  },
];
