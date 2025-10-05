/**
 * Google Apps Script for Siscom Africa Investment Form
 * This script receives form data and writes it to a Google Sheet
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a new Google Sheet and note its ID
 * 5. Update the SHEET_ID constant below
 * 6. Deploy the script as a web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and update YOUR_SCRIPT_ID in InvestmentForm.tsx
 */

// Replace this with your Google Sheet ID (found in the URL)
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.investmentAmount || '',
      data.source || 'Investment Form'
    ];
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Investment Amount',
        'Source'
      ];
      sheet.appendRow(headers);
    }
    
    // Append the new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Siscom Africa Investment Form API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
