module.exports = {
  '*.{ts}': ['tslint --fix'],
  '*.{ts,json,md}': ['prettier --write', 'git add'],
}
