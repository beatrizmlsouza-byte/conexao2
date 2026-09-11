import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarAgendamentos } from './DAO/agendamento/agendamento.js'
import { buscarConsultas } from './DAO/consulta/consulta.js'
import { buscarEspecialidades } from './DAO/especialidade/especialidade.js'
import { buscarMedicos } from './DAO/medico/medico.js'


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

app.get('/consulta', async (req, res) => {
  let pacientes = await buscarConsultas()
  res.json(pacientes)
  
})


app.get('/especialidade', async (req, res) => {
  let pacientes = await buscarEspecialidades()
  res.json(pacientes)
  
})

app.get('/medico', async (req, res) => {
  let pacientes = await buscarMedicos()
  res.json(pacientes)
  
})


app.get('/agendamento', async (req, res) => {
  let pacientes = await buscarAgendamentos ()
  res.json(pacientes)
  
})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
