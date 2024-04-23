const Router = require('express').Router
const userRoutes = require('./user/userRoute')
const postRoutes = require('./post/postRoute')

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/posts', postRoutes)

export default routes