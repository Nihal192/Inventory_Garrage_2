const SHEET_ID = '1n0C233s5m4cH5sjEJsbDTN6qfj0-yM5x2i8qBVvuxo8';
const SHEET_NAME = 'Sheet1';

function getSheet() {
  return SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
}

function doGet() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const values = body.values;
  getSheet().appendRow(values);
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'OK' })
  ).setMimeType(ContentService.MimeType.JSON);
}
