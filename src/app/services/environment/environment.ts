/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import { ApiInfo, IEnvironment } from './environment.interface';
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiInfo = new ApiInfo();
apiInfo.apiBaseUrl = "https://devapi.lodasoft.com/";

export const environment: IEnvironment = {
    production: false,
    enableDebugTools: true,
    environment: 'Local',
    logLevel: 'debug',
    apiInfo,
    clientRoot: ""
};
