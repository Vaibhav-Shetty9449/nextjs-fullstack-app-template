// build: Changes affecting build system/external dependencies
// ci: CI configuration changes
// docs: Documentation changes
// feat: New features
// fix: Bug fixes
// perf: Performance improvements
// refactor: Code changes that aren't fixes/features
// style: Formatting, white-space, etc
// test: Test additions/corrections
// chore: Maintenance tasks
// translation: Translation updates
// security: Security-related changes
// changeset: Changeset additions

module.exports = {
    extends: ['@commitlint/config-conventional'], // Fixed typo (was @committing/config-conventional)
    rules: {
      'body-leading-blank': [1, 'always'],
      'body-max-line-length': [2, 'always', 100],
      'footer-leading-blank': [1, 'always'],
      'footer-max-line-length': [2, 'always', 100],
      'header-max-length': [2, 'always', 100],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-case': [
        2,
        'never', 
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
      ],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'], // Changed from '-' to '.'
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'build',
          'chore',
          'ci',
          'docs',
          'feat', 
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'translation',
          'security',
          'changeset'
        ]
      ]
    }
  }