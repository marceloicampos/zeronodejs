// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//     res.write('hello world')
//     console.log('server started')
//     return res.end()
// })

// server.listen(3333)
// http://localhost:3333
// node --watch server.js
// acima criamos servidor nativo
// abaixo vamos o framework fastify para criar servidor nodejs
// npm install fastify

import { fastify } from 'fastify'
import { DbMemory } from './dbmemory.js'

const server = fastify()

const database = new DbMemory()

server.get('/', (request, reply) => {
    reply.send('Hello World!')
})

server.get('/rocket', (request, reply) => {
    reply.send('Hello Rocket')
})

server.get('/node', (request, reply) => {
    reply.send('Hello Node')
})

server.get('/videos', (request, reply) => {
    const videos = database.list()
    return videos
})

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.put('/videos/:id', (req, res) => {
    res.send('Hello Videos')
})

server.delete('/videos/:id', (req, res) => {
    res.send('Hello Videos')
})

server.listen({ port: 3333 })
