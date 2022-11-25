export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface IEnvironment {
    production: boolean;
    environment: string;

    // Enables use of ng.profiler.timeChangeDetection(); in browser console
    enableDebugTools: boolean;
    logLevel: LogLevel;
    apiInfo: ApiInfo;
    clientRoot: string;
}

export class ApiInfo {
    apiBaseUrl: string | undefined;
}
