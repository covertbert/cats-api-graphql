import server from './apollo'
import logger from './logger'

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  logger.log({
    level: 'info',
    message: `🚀  Server ready at ${url}`,
  })
})
