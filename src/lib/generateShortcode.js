// Generate unique short code

// Import dependencies
const { getUrlRecordByShortCode } = require('../dbacess/urlrecord')

// Generate a random string
function generateRandomString(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength))
    }
    return result
}

// Generate a unique short code
async function generateShortCode() {
    let shortCode = generateRandomString(10)
    let urlRecord = await getUrlRecordByShortCode(shortCode)
    while (urlRecord) {
        shortCode = generateRandomString(10)
        urlRecord = await getUrlRecordByShortCode(shortCode)
    }
    return shortCode
}

module.exports = generateShortCode