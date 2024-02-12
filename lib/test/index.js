"use strict";
const util_1 = require("../util");
const overrides = [];
const extensions = [];
const plugins = [];
if ((0, util_1.doesModuleExist)('eslint-plugin-testing-library')) {
    extensions.push('plugin:testing-library/react');
}
if ((0, util_1.doesModuleExist)('eslint-plugin-vitest')) {
    extensions.push('plugin:vitest/recommended');
    plugins.push('vitest');
}
if (extensions.length || plugins.length) {
    overrides.push({
        files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
        extends: extensions,
        plugins,
    });
}
const config = {
    env: {
        vitest: true,
    },
    overrides,
};
module.exports = config;
