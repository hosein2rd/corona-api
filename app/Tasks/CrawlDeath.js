'use strict'

const Task = use('Task')

class CrawlDeath extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    this.info('Task CrawlDeath handle')
  }
}

module.exports = CrawlDeath
