import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // 1. 리액트 권장 규칙
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 2. Vite 전용 규칙 (HMR 유지용)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 3. 실무형 커스텀 규칙
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^[A-Z_]', // 대문자로 시작하는 변수(컴포넌트 등) 무시
          argsIgnorePattern: '^_', // _로 시작하는 인자 무시
        },
      ],
      'no-console': 'off', // 배포 전 console.log 체크용

      // 4. Prettier와 싸우지 않기 위한 설정
      // 스타일 관련은 에러를 내지 않고 Prettier가 알아서 하게 둡니다.
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
    },
  },
];
