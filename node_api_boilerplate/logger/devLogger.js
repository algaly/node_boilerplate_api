const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const devLogger = () => {
    const myFormat = printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level}: ${message}`;
    });

    return createLogger({
        level: "debug",
        //format: format.simple(),
        format: combine(format.colorize(), label({ label: "algaly" }), timestamp({ format: "HH:mm:ss" }), myFormat),
        defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console(),
            new transports.File({
                filename: "devErrors.log",
            }),
        ],
        //transports: [new transports.Console()] //use this to log all to console only
    });
};

module.exports = devLogger;
