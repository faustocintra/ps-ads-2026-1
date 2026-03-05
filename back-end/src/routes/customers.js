import { Router } from 'express'
import controller from '../controllers/customers.js'
const router = Router()

// onde for POST, vai no contoller e cria
//POST precisa ter corpo na requisição pois ele precisa mandar dados
router.post('/', controller.create)

router.get('/', controller.retrieveAll)


export default router