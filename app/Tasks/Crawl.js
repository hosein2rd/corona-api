'use strict'

const Task = use('Task')

class Crawl extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    this.info('Task Crawl handle')
  }
}

module.exports = Crawl
