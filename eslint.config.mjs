import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'scripts/**', '*.config.js', '*.config.mjs', '*.config.ts'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...nextPlugin.configs['core-web-vitals'],
  },
];
