
module.exports = function parseUrl(url = location.href) {
  const [, query] = url.split('?');

  if (query === undefined) {
    return {};
  }

  const params = query
    .split('&')
    .map(x => x.split('='))
    .filter(x => x[0] !== '')
    .reduce((obj, [key, value = '']) => {
      const decodeValue = decodeURIComponent(value || '');
      return Object.assign(obj, { [key]: decodeValue });
    }, {});

  return params;
};
