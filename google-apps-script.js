// ==============================================
// Google Apps Script - טייכמאנצ הזמנות
// ==============================================
// הוראות:
// 1. פתח את Google Sheet → Extensions → Apps Script
// 2. מחק את כל מה שכתוב שם והדבק את הקוד הזה
// 3. לחץ Deploy → New Deployment
// 4. בחר Type: Web App
// 5. Execute as: Me | Who has access: Anyone
// 6. לחץ Deploy וקבל את ה-URL
// 7. העתק את ה-URL והדבק אותו ב-index.html (בשורה של GOOGLE_SCRIPT_URL)
// ==============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // חישוב סה"כ פריטים
    var totalItems = (data.q0 || 0) + (data.q1 || 0) + (data.q2 || 0) + (data.q3 || 0) + (data.q4 || 0) * 4;

    // חישוב תאריך איסוף (יום שישי הקרוב)
    var now = new Date();
    var dayOfWeek = now.getDay(); // 0=Sunday ... 5=Friday
    var daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    if (daysUntilFriday === 0) daysUntilFriday = 7; // אם היום שישי, הבא
    var pickupDate = new Date(now);
    pickupDate.setDate(now.getDate() + daysUntilFriday);
    var pickupStr = Utilities.formatDate(pickupDate, "Asia/Jerusalem", "dd/MM/yyyy");

    // הוספת שורה
    sheet.appendRow([
      Utilities.formatDate(now, "Asia/Jerusalem", "dd/MM/yyyy HH:mm"),  // A - חותמת זמן
      data.name,           // B - שם מלא
      data.phone,          // C - טלפון
      data.email || "",    // D - מייל
      data.address,        // E - כתובת
      data.pickup,         // F - נקודת איסוף
      data.q0 || 0,        // G - להבת הסלמון
      data.q1 || 0,        // H - מטיאס ים תיכוני
      data.q2 || 0,        // I - סלמון סקין
      data.q3 || 0,        // J - מטיאס חרדלי
      data.q4 || 0,        // K - רביעייה
      totalItems,          // L - סה"כ פריטים
      data.total,          // M - סה"כ ₪
      data.notes || "",    // N - הערות
      "לא שולם",           // O - שולם
      "לא נמסר",           // P - נמסר
      "לא נשלח",           // Q - נשלח לנקודת איסוף
      pickupStr,           // R - תאריך איסוף
      ""                   // S - הערות גיל
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// פונקציית בדיקה - אפשר להריץ מה-Editor כדי לוודא שהכל עובד
function doGet(e) {
  return ContentService
    .createTextOutput("Apps Script is running! Use POST to submit orders.")
    .setMimeType(ContentService.MimeType.TEXT);
}
