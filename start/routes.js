'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('deaths', 'StatisticController.getDeaths')
  Route.get('recovered', 'StatisticController.getRecovered')
  Route.get('confirmed', 'StatisticController.getConfirmed')
}).prefix('api')
