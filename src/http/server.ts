import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from 'src/routes/create-poll'
import { getPoll } from 'src/routes/get-poll'
import { voteOnPoll } from 'src/routes/vote-on-poll'
import { pollResults } from './websocket/poll-results'

const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw",
    hook: "onRequest",
})

app.register(websocket)
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running")
})