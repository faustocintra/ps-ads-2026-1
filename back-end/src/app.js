import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

/**************** ROTAS *******************/

import customersRoute from './routes/customers.js'
app.use('/customers', customersRoute)
/*quando o endereço pedir '/customers' a requisição vai para o
customersRoute e vai executar o que está nesse arquivo*/

export default app
