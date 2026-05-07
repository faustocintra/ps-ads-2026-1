import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'

const app = express()

import cors from 'cors'

app.use(cors({
 origin: process.env.ALLOWED_ORIGINS.split(','),
 credentials: true   // Habilita o envio de cookies para o front-end
}))

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)


/**************** ROTAS *******************/

import customersRoute from './routes/customers.js'
app.use('/customers', customersRoute)
/*quando o endereço pedir '/customers' a requisição vai para o
customersRoute e vai executar o que está nesse arquivo*/

import carsRoute from './routes/cars.js'
app.use('/cars', carsRoute)
/*quando o endereço pedir '/cars' a requisição vai para o
carsRoute e vai executar o que está nesse arquivo*/

/******* MIDDLEWARE DE AUTENTICAÇÃO *******/

import authMiddleware from './middleware/auth.js'
app.use(authMiddleware)

/**************** ROTAS *******************/

import usersRoute from './routes/users.js'
app.use('/users', usersRoute)

import sellersRoute from './routes/sellers.js'
app.use('/sellers', sellersRoute)

export default app
