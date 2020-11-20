const ws = require('aws-lambda-ws-server')
exports.handler = ws(
  ws.handler({
    async connect ({ id }) {
      console.log('connection %s', id)
      return { statusCode: 200 }
    },
    async disconnect ({ id }) {
      console.log('disconnect %s', id)
      return { statusCode: 200 }
    },
    async default ({ message, event, id }) {
      console.log('default message', message, id, event)
      return { statusCode: 200 }
    },
    async echo ({ message, id, context, event }) {
      const { postToConnection } = context
      console.log('message', message, id, event)
      await postToConnection({ message }, id)
      return { statusCode: 200 }
    }
  })
)
