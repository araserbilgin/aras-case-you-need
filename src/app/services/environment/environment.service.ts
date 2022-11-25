import { Injectable } from '@angular/core';
import { environment } from './environment';
import { ApiInfo, IEnvironment, LogLevel } from './environment.interface';

@Injectable()
export class EnvironmentService implements IEnvironment {

  get production(): boolean {
    return environment.production;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }

  get apiInfo(): ApiInfo {
      return environment.apiInfo;
  }

  get environment(): string {
    return environment.environment;
  }

  get clientRoot(): string {
      return environment.clientRoot;
  }

  constructor() {}
}
