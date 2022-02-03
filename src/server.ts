import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
const port = 3333

app.use(express.json())

//ROUTES
app.use('/categories', categoriesRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
