export const fileType = {
  jpg: 'image/jpeg',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pdf: 'application/pdf',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
};

export function getFileType(name: string) {
  let type = '';
  Object.keys(fileType).forEach(function (key) {
    if (name.endsWith(key)) {
      type = fileType[key];
    }
  });

  return type;
}