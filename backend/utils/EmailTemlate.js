const verifyEmailTemplate = ({ name, url }) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f8fb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background-color: #0057B8; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Sivan Catering</h2>
          <p style="margin: 5px 0 0;">Order Confirmation</p>
        </div>
        <div style="padding: 30px; color: #333;">
          <p>Dear ${name},</p>    
          <p>Thank you for choosing <strong>Sivan Catering</strong>.</p>   
          
        </div>
        <div style="background-color: #0057B8; color: white; padding: 15px; text-align: center; font-size: 14px;">
          © Sivan Catering | +91-XXXXXXXXXX | sivan.catering@example.com
        </div>
      </div>
    </div>
  `;
};

export default verifyEmailTemplate;
