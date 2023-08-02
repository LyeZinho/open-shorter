function encodeUrl(url) {
  return encodeURIComponent(url);
}

function decodeUrl(url) {
  return decodeURIComponent(url);
}

module.exports = {
    encodeUrl,
    decodeUrl
}