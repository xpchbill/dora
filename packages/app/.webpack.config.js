const path = require('path');
const WebpackBar = require('webpackbar');
const get = require("lodash.get");
const cloneDeep = require('lodash.clonedeep');
const {
    getPaths
} = require("@rescripts/utilities");

const removeModuleScopePlugin = config => {
    config.resolve.plugins = config.resolve.plugins.filter(
        p => p.constructor && p.constructor.name !== "ModuleScopePlugin"
    );
    return config;
};

const isBabelLoader = x => x && x.loader && x.loader.includes("babel-loader");

const enableBabelrc = (rules) => {
    const babelLoaderPaths = getPaths(isBabelLoader, rules);
    const babelLoader = get(rules, babelLoaderPaths[0].join("."));
    babelLoader.options = {
        ...babelLoader.options,
        babelrc: true
    };
};

module.exports = config => {
    const rules = config.module.rules;
    if (rules.length !== 3) {
        throw new Error('Unexpected CRA config. Exiting.');
    }
    const sourceMapLoader = {
        enforce: 'pre',
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        use: 'source-map-loader',
    };
    const newRules = cloneDeep(rules);
    newRules.splice(1, 0, sourceMapLoader)
    const newConfig = {
        ...config,
        plugins: [...config.plugins, new WebpackBar({
            name: 'dora/app'
        })],
        module: {
            ...config.module,
            rules: newRules
        }
    };
    
    // enableBabelrc(newConfig.module.rules);
    // Object.assign(newConfig.resolve.alias, {
    //     '@dora/ui': '@dora/ui/build'
    // });
    // return removeModuleScopePlugin(newConfig);
    return newConfig;
}