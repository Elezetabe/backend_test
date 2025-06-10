import type { HttpContext } from '@adonisjs/core/http'
import Especialista from '../models/especialista.js'

export default class EspecialistasController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    try {
      const especialistas = await Especialista.all()
      return especialistas
    } catch (error) {
      console.error('Error fetching especialistas:', error)
      return { error: 'Failed to fetch especialistas' }
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try {
      const data = request.only(['nombreCompleto', 'especialidad', 'registroProfesional'])
      const especialista = await Especialista.create(data)
      return especialista
    } catch (error) {
      console.error('Error creating especialista:', error)
      return { error: 'Failed to create especialista' }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    try {
      const especialista = await Especialista.findOrFail(params.id)
      return especialista
    } catch (error) {
      console.error('Error fetching especialista:', error)
      return { error: 'Especialista not found' }
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    try {
      const especialista = await Especialista.findOrFail(params.id)
      const data = request.only(['nombreCompleto', 'especialidad', 'registroProfesional'])
      especialista.merge(data)
      await especialista.save()
      return especialista
    } catch (error) {
      console.error('Error updating especialista:', error)
      return { error: 'Failed to update especialista' }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try {
      const especialista = await Especialista.findOrFail(params.id)
      await especialista.delete()
      return { message: 'Especialista deleted successfully' }
    } catch (error) {
      console.error('Error deleting especialista:', error)
      return { error: 'Failed to delete especialista' }
    }
  }
}
