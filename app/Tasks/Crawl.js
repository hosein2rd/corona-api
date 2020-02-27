'use strict'

const Task = use('Task')
const rp = require('request-promise')
const Country = use('App/Models/Country')

class Crawl extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    const option = {
      url:'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&outSR=102100&resultOffset=0&resultRecordCount=100&cacheHint=true',
      json: true
    }

    rp(option)
      .then(async (data) => {
        const list = data.features
        for (let item of list) {
          const name = item.attributes.Country_Region
          const confirmed = item.attributes.Confirmed
          const recovered = item.attributes.Recovered
          const deaths = item.attributes.Recovered
          await Country.findOrCreate(
            { name: name },
            { 
              name: name,
              confirmed: confirmed,
              recovered: recovered,
              deaths: deaths
            }
          )
        }
      })
      .catch((err) => {
        this.info(`error: ${err}`)
      })
  }
}

module.exports = Crawl
