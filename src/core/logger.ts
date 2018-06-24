
export class Logger {

    constructor(level) {

    }

    dir(obj: any, options?: any): void {
        console.dir(obj);
    }

    error(message?: any, ...optionalParams: any[]): void {
        console.error(message, ...optionalParams);
    }

    info(message?: any, ...optionalParams: any[]): void {
        console.info(message, ...optionalParams);
    }

    log(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }

    trace(message?: any, ...optionalParams: any[]): void {
        console.trace(message, ...optionalParams);
    }

    warn(message?: any, ...optionalParams: any[]): void {
        console.warn(message, ...optionalParams);
    }

    time(label: string): void {
        if (console.time) {
            console.time(label);
        }
    }

    timeEnd(label: string): void {
        if (console.timeEnd) {
            console.timeEnd(label);
        }
    }
}

export const logger = new Logger('info');
