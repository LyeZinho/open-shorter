const { createClickRecord } = require('../dbacess/clickrecord');

function registerClick(shortCode, clientIp, browserName) {
    return createClickRecord(shortCode, clientIp, browserName);
}

module.exports = registerClick;