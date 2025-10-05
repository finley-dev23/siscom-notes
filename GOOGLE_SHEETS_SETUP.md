# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the Siscom Africa investment form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Siscom Africa Investment Submissions"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit`
   - Sheet ID: `1ABC123XYZ789`

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the contents from `google-apps-script.js`
4. Update the `SHEET_ID` constant with your actual Google Sheet ID
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project "Siscom Africa Form Handler"

## Step 3: Deploy the Script

1. Click the "Deploy" button in the top right
2. Select "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Set the following:
   - **Description**: "Siscom Africa Investment Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. Click "Done"

## Step 4: Get the Web App URL

1. After deployment, you'll see a "Web app" section
2. Copy the URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)
3. Copy just the `YOUR_SCRIPT_ID` part

## Step 5: Update the Frontend Code

1. Open `components/InvestmentForm.tsx`
2. Find this line:
   ```typescript
   const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID

## Step 6: Test the Integration

1. Run your Next.js application
2. Go to the investment form
3. Fill out and submit the form
4. Check your Google Sheet - you should see the data appear in a new row

## Data Structure

The form will save the following data to your Google Sheet:

| Column | Description |
|--------|-------------|
| Timestamp | When the form was submitted |
| First Name | Investor's first name |
| Last Name | Investor's last name |
| Email | Investor's email address |
| Phone | Investor's phone number |
| Investment Amount | Selected investment amount |
| Source | Always "Investment Form" |

## Troubleshooting

### Common Issues:

1. **CORS Errors**: The script uses `no-cors` mode, so you won't see response details in the browser console
2. **Permission Errors**: Make sure the script is deployed with "Anyone" access
3. **Sheet Not Found**: Double-check that the SHEET_ID is correct
4. **Script Not Working**: Ensure the script is deployed, not just saved

### Testing the Script:

1. You can test the script directly by visiting the web app URL in your browser
2. You should see a JSON response indicating the API is running
3. Check the Apps Script logs for any errors

## Security Notes

- The script accepts data from anyone, which is appropriate for a public form
- Consider adding basic validation in the script if needed
- The Google Sheet will contain sensitive personal information - ensure proper access controls

## Next Steps

After setup, you can:
1. Set up email notifications when new submissions arrive
2. Add data validation and formatting
3. Create automated responses to investors
4. Set up data analysis and reporting

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify the Google Sheet permissions
3. Test the script URL directly in a browser
4. Ensure all IDs and URLs are correctly copied
