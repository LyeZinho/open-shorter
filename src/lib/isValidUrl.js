// Validade if the string is a valid URL

function isValidUrl(str) {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlRegex.test(str);
}

// Test
// console.log(isValidUrl('https://www.google.com')); // true

module.exports = isValidUrl;