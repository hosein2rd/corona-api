'use strict'

const Task = use('Task')

class CrawlConfirmed extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    this.info('Task CrawlConfirmed handle')
  }
}

module.exports = CrawlConfirmed
