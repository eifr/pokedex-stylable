/* eslint-disable no-console */
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import type { Configuration } from 'webpack';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require('../webpack.config.js') as Configuration;

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

export const runServer = async () => {
    console.log('Starting server...');
    await server.start();
};

export const stopServer = async () => {
    console.log('Stopping server...');
    await server.stop();
};