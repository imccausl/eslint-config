"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesModuleExist = void 0;
const doesModuleExist = (moduleName) => {
    try {
        require.resolve(moduleName);
        return true;
    }
    catch {
        return false;
    }
};
exports.doesModuleExist = doesModuleExist;
