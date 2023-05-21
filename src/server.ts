import fastify from 'fastify'

const app = fastify()

app.get('/jujuba', () => {
  return 'Oi meu amorzinho <3'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Dale bença, tá rodando já visse: http://localhost:3333')
  })
