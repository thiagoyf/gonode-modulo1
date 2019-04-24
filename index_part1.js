const express = require('express')

// Express é um micro framework que lida diretamente com rotas e com a parte de
// views
const app = express()

// app.get("/", (req, res) => {
//   return res.send(`Bem-Vindo,  ${req.query.name}`);
// });

// '(req, res) => {}' é um middleware, ou interceptador de requisições no Node.
// o Middleware ele pode interceptar e devolver uma resposta ou apenas fazer
// algo na aplicação.

// os middleware podem bloquear o fluxo das requisições dentro do express
// ou não, passando a função next após o res

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST : ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  )

  // Modifica a requisição e passa para outros middlewares que vem após ele.
  req.appName = 'GoNode'

  // Deixa o fluxo correr normalmente
  return next()
}

// Outro jeito de utilizarum middleware é utilizar o app.use(middleware)
// Desse jeito todas as requisições vão utilizar o middleware.
app.use(logMiddleware)

// Para lidar com rotas podemos fazer o seguinte abaixo
app.get('/', (req, res) => {
  // com http, so tinhamos res.end
  // agora da para se usar res.send e res.json (resposta em json)

  // Esse é um query param, são parametro que vem depois do '?'
  // Exemplo: '/?name=Thiago' o nome do parametro é name, e o valor é Thiago.
  return res.send(`Bem-Vindo ao ${req.appName},  ${req.query.name}`)
})

// URL quem vem como parametro o nome do usuário
// para pegar o parametro na url, usa req.params.<nome_do_parametro>
// Não é um query param
app.get('/nome/:name', (req, res) => {
  // retorna resposta no formato JSON
  return res.json({
    message: `Bem vindo, ${req.params.name}`
  })
})

// Sobe o servidor na porta 3000
// Importante, o listen sempre tem que ser a última coisa que vir
app.listen(3000)
