import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfigurator } from 'webpack-dev-server'
export function buildDevServer(options: BuildOptions): DevServerConfigurator {
    return {
        port: options.port,
        open: true
    }
}
