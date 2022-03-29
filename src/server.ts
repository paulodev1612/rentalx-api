import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()
const port = 3333

app.use(express.json())

//ROUTES
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
