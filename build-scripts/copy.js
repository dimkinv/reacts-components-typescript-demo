"use strict";
/* tslint:disable: no-console */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const copy = require("recursive-copy");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const source = process.argv[2];
            const destination = process.argv[3];
            const filter = process.argv.slice(4) || ['**'];
            console.info(`info: copy initiated with s: ${source}, d: ${destination}, f: ${filter}`);
            if (!source || !destination) {
                console.error('error: source and destination are mandatory');
                process.exit(1);
            }
            const options = {
                filter,
                overwrite: true
            };
            const results = yield copy(source, destination, options);
        }
        catch (ex) {
            throw ex;
        }
    });
}
init();
//# sourceMappingURL=copy.js.map