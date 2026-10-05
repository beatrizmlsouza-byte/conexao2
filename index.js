import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarAgendamentos } from './DAO/agendamento/agendamento.js'
import { buscarConsultas } from './DAO/consulta/consulta.js'
import { buscarEspecialidades } from './DAO/especialidade/especialidade.js'
import { buscarMedicos } from './DAO/medico/medico.js'
import { incluirPacientes } from './DAO/paciente/inserir_paciente.js'
import { incluirMedicos } from './DAO/medico/inserir_medico.js'


const app = express()
app.use(express.json())

// Rota Base
app.get('/ola', (req, res) => {
    res.json({ usario })
})

app.post('/paciente', async (req, res) => {
    let {nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo} = req.body
    let infos = [nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo]

    let resp = await incluirPacientes(infos)
    //console.log(name, endereco, telefone, doencasPrevias, remedioDeUsoContinuo)
    res.send(resp)
})

app.get('/consulta', async (req, res) => {
  let pacientes = await buscarConsultas()
  res.json(pacientes)
  
})


app.get('/especialidade', async (req, res) => {
  let pacientes = await buscarEspecialidades()
  res.json(pacientes)
  
})

app.post('/medico', async (req, res) => {
  let {nome, endereco, telefone, crm, numeroRegistro} = req.body
  let infos = [nome, endereco, telefone, crm, numeroRegistro]

  let resp = await incluirMedicos(infos)
  //console.log(name, endereco, telefone, doencasPrevias, remedioDeUsoContinuo)
  res.send(resp)
  
})


app.get('/agendamento', async (req, res) => {
  let pacientes = await buscarAgendamentos ()
  res.json(pacientes)
  
})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
