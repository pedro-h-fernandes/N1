import { Router } from 'express'
import userRoutes from './user/userRoute'
import postRoutes from './post/postRoute'

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/posts', postRoutes)

export default routes