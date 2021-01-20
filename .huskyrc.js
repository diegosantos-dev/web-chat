module.exports = {
  husky: {
    hooks: {
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      'pre-push':
        'CI=true react-scripts test --passWithNoTests && npm run eslint',
      'pre-commit': 'npm run eslint:fix',
      'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
    },
  },
};
