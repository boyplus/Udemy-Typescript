"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetaDetaKeys_1 = require("./MetaDetaKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaDetaKeys_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDetaKeys_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
