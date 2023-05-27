const fetch = require('node-fetch')

const header = new Headers()
header.append('accept', 'application/json, text/plain, */*')
header.append('accept-language', 'en-US,en;q=0.9')
header.append('sec-ch-ua-mobile', '?0')
header.append('sec-fetch-dest', 'empty')
header.append('sec-fetch-mode', 'cors')
header.append('sec-fetch-site', 'same-origin')
header.append('user-agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0')

const myHeader = {
  method: 'GET',
  headers: header
}

module.exports.GET_HTML = async (url) => {
  try {
    const response = await fetch(url, myHeader)
    const html = await response.text()
    return html
  } catch (err) {
    console.log(err)
  }
}
