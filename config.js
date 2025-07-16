const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7675872856:AAG-jW5xUd-KfNAAPEKoq5vNAMtTlBVXlFg',
  id: isNaN(parsedId) ? 7039788713 : parsedId // replace 12345.. with your telegram chat id
};
