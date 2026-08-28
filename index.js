import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'

const app = express()
app.use(express.json())

// Rota Base
app.get('/ola', (req, res) => {
    res.json({ mensagem: 'Ola mundo !!!' })
})

app.get('/paciente', async (req, res) => {
    let pacientes = await buscarPacientes()
    res.json(pacientes)
    
})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
