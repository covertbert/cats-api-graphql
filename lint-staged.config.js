module.exports = {
  '*.{ts,tsx}': ['tslint --fix'],
  '*.{ts,tsx,json,md,html}': ['prettier --write', 'git add'],
}
