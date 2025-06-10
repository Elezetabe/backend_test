/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import EspecialistasController from '../app/controllers/especialistas_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/especialistas', ([EspecialistasController, 'index']))
router.post('/especialistas', ([EspecialistasController, 'store']))
router.get('/especialistas/:id', ([EspecialistasController, 'show']))
router.put('/especialistas/:id', ([EspecialistasController, 'update']))
router.delete('/especialistas/:id', ([EspecialistasController, 'destroy']))
