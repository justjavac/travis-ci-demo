
module.exports = function parseUrl(url = location.href) {
  const [, query] = url.split('?');

  if (query === undefined) {
    return {};
  }

  const params = query
    .split('&')
    .map(x => x.split('='))
    .filter(x => x[0] !== '')
    .map(([key, value]) => ({ [key]: decodeURIComponent(value) }));

  return Object.assign({}, ...params);
};
