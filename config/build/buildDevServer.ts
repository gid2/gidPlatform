import type { Configuration as DevServerConfigurator } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurator {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
