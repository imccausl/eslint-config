"use strict";
const util_1 = require("../util");
const plugins = [];
const extensions = [];
if ((0, util_1.doesModuleExist)('react')) {
    plugins.push('react');
    extensions.push('plugin:react/recommended');
}
if ((0, util_1.doesModuleExist)('react-hooks')) {
    plugins.push('react-hooks');
    extensions.push('plugin:react-hooks/recommended');
}
if ((0, util_1.doesModuleExist)('jsx-a11y')) {
    plugins.push('jsx-a11y');
    extensions.push('plugin:jsx-a11y/recommended');
}
if ((0, util_1.doesModuleExist)('@tanstack/eslint-plugin-query')) {
    plugins.push('@tanstack/query');
    extensions.push('@tanstack/eslint-plugin-query/recommended');
}
const config = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: extensions,
    plugins,
    rules: {},
    settings: {
        react: {
            version: 'detect'
        }
    }
};
module.exports = config;
