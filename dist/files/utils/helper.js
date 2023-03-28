"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileType = exports.fileType = void 0;
exports.fileType = {
    jpg: 'image/jpeg',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
};
function getFileType(name) {
    let type = '';
    Object.keys(exports.fileType).forEach(function (key) {
        if (name.endsWith(key)) {
            type = exports.fileType[key];
        }
    });
    return type;
}
exports.getFileType = getFileType;
//# sourceMappingURL=helper.js.map