import server from './apollo'
import logger from './logger'

server.listen().then(({ url }) => {
  logger.log({
    level: 'info',
    message: `🚀  Server ready at ${url}`,
  })
})
