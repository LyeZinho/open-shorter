const getShortCode = require('../../lib/generateShortcode')

export default function handler(req, res) {
  getShortCode().then(shortCode => {
    res.status(200).json({ shortCode })
  })
}
