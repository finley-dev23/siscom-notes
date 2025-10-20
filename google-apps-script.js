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
const SHEET_ID = '1-cmRoDJ2vcT2xBoTqZvzAZOjyW9N4QA8lBkXeZXqBnw';

// Email notification settings
const NOTIFICATION_EMAILS = [
  'finley@siscom.tech',
  'garvey@siscom.tech',
  'dorcas@siscom.tech',
  'derrick@siscom.tech'
  // Add more email addresses as needed
];

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
    
    // Send email notification to team
    sendEmailNotification(data);
    
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

/**
 * Send email notification when a new investment submission is received
 */
function sendEmailNotification(data) {
  try {
    const subject = `🚀 New Investment Lead: ${data.firstName} ${data.lastName}`;
    
    const htmlBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="color: #ec4899; margin-bottom: 20px;">💰 New Investment Submission</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Investor Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
                  <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #ec4899;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0;">${data.phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Investment Amount:</td>
                  <td style="padding: 8px 0; color: #ec4899; font-size: 18px; font-weight: bold;">${data.investmentAmount}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Timestamp:</td>
                  <td style="padding: 8px 0;">${new Date(data.timestamp).toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fef3f8; padding: 15px; border-radius: 8px; border-left: 4px solid #ec4899;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Action Required:</strong> Follow up with this lead within 24 hours to discuss investment details and answer any questions.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #666; margin: 0;">
              This notification was automatically generated from the Siscom Africa investment landing page.
            </p>
          </div>
        </body>
      </html>
    `;
    
    const plainBody = `
New Investment Submission

Investor Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Investment Amount: ${data.investmentAmount}
- Timestamp: ${new Date(data.timestamp).toLocaleString()}

Action Required: Follow up with this lead within 24 hours.
    `;
    
    // Send email to all notification recipients
    NOTIFICATION_EMAILS.forEach(email => {
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody
      });
    });
    
    Logger.log(`Email notification sent to ${NOTIFICATION_EMAILS.length} recipients`);
    
  } catch (error) {
    Logger.log(`Error sending email notification: ${error.toString()}`);
    // Don't throw error - we don't want to fail the form submission if email fails
  }
}
