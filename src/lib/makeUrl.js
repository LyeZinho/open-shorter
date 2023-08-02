const generateShortCode = require('./generateShortcode');
const { createUrlRecord } = require('../dbacess/urlrecord');

// Expires in 90 days

async function makeUrl(url) {
    const shortCode = await generateShortCode();
    const urlRecord = await createUrlRecord(url, shortCode, new Date(Date.now() + 90 * 24 * 60 * 60 * 1000))
    return urlRecord
}

module.exports = makeUrl