const cheerio = require('cheerio')
const { GET_HTML } = require('./http_components.js')

module.exports.main = async (url, scrapeItems) => {
  const PageHTML = await GET_HTML(url)
  const $ = cheerio.load(PageHTML)
  const elContent = []

  const params = scrapeItems.split(',')

  for (const param of params) {
    console.log(param)
    $(param).each((i, el) => {
      elContent.push({ element: param, elementContent: [i] = $(el).text() })
    })
  }
  console.log(elContent)
  return elContent
}
