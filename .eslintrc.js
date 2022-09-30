module.exports = {
  extends: ['taro/react', 'plugin:prettier/recommended'],
  rules: {
    indent: ["error", 2],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'config/*.js'],
};
