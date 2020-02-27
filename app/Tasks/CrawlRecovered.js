'use strict'

const Task = use('Task')

class CrawlRecovered extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    this.info('Task CrawlRecovered handle')
  }
}

module.exports = CrawlRecovered
