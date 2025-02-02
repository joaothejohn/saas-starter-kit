// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'es',
  },
  localePath: path.resolve('./public/locales'),
};
