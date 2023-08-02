const { searchClickRecords } = require('../dbacess/clickrecord');

function getMetrics(shortCode) {
    return searchClickRecords(shortCode);
}

module.exports = getMetrics;