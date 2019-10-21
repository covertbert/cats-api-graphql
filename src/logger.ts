import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  defaultMeta: { service: 'cats-api-graphql' },
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  level: 'info',
  transports: [
    new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
    new transports.File({ filename: 'quick-start-combined.log' }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  )
}

export default logger
