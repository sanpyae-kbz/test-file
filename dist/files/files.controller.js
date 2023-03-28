"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const helper_1 = require("./utils/helper");
const decorators_1 = require("@nestjs/common/decorators");
let FilesController = class FilesController {
    getPath(name) {
        return (0, path_1.join)(process.cwd(), 'src/files/assets', name);
    }
    getFile(res, name) {
        const file = (0, fs_1.createReadStream)(this.getPath(name));
        console.log('file', file);
        console.log('name', name);
        const type = (0, helper_1.getFileType)(name);
        console.log('type', type);
        res.set({
            'Content-Type': type,
        });
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, decorators_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", common_1.StreamableFile)
], FilesController.prototype, "getFile", null);
FilesController = __decorate([
    (0, common_1.Controller)('files')
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map