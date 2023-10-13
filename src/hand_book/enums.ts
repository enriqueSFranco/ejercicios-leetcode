// ENUMS EN TIEMPO DE COMPILACIÓN
enum LogLevel {
  LOG = 'log',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  DEBUG = 'debug'
}

type LogLevelStrings = keyof typeof LogLevel

function printImportant (key: LogLevelStrings, message: string) {
  if (LogLevel[key] === LogLevel.INFO) {
    return `info: ${message}`
  }
  if (LogLevel[key] === LogLevel.LOG) {
    return `log: ${message}`
  }

  if (LogLevel[key] === LogLevel.WARNING) {
    return `warning: ${message}`
  }

  if (LogLevel[key] === LogLevel.ERROR) {
    return `error: ${message}`
  }

  if (LogLevel[key] === LogLevel.DEBUG) {
    return `debug: ${message}`
  }
}

printImportant('ERROR', 'This is a message')
