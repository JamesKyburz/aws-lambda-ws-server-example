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
    async default ({ message, id }) {
      console.log('default message', message, id)
      return { statusCode: 200 }
    },
    async message ({ message, id, context }) {
      const { postToConnection } = context
      console.log('message', message, id)
      await postToConnection({ message: 'echo' }, id)
      return { statusCode: 200 }
    }
  })
)
