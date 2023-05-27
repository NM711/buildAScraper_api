const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { main } = require('../scrapers/scraping_components.js')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// blacklist unauth domains later on possibly...

app.use(cors())

app.post('/text', async (req, res) => {
  const url = req.body.url
  const element = req.body.el
  const data = await main(url, element)
  res.status(200).send(data || 'Err: make sure the url is correct and the inputted element exists!')
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})

/* THIS SCRAPER IS MAINLY FOR STATIC WEBSITES, OR DYNAMIC WEBAPPS WITH A LOT OF STATIC CONTENT.
 *
 * MOST OF THE TIME THE SCRAPER WILL NOT WORK VERY WELL WITH HEAVY DYNAMIC SITES
*/
