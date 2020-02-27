'use strict'

const Country = use('App/Models/Country')

class StatisticController {
  async getDeaths() {

    const countries = (await Country.query().fetch()).toJSON()
    const list = []
    let totalDeaths = 0

    for (let country of countries) {
      list.push({
        country: country.name,
        deaths: country.deaths
      })

      totalDeaths += country.deaths
    }
    
    return {
        success: true,
        totalDeaths,
        deaths: list
    }
  }

  async getRecovered() {
    const countries = (await Country.query().fetch()).toJSON()
    const list = []
    let totalRecovered = 0

    for (let country of countries) {
        list.push({
            country: country.name,
            recovered: country.recovered
          })
    
          totalRecovered += country.recovered
    }
    return {
        success: true,
        totalRecovered,
        recovered: list
    }
  }
}

module.exports = StatisticController
