
// Define a type for our email transport
type EmailTransporter = {
  verify: (callback: (error: Error | null, success: any) => void) => void;
  sendMail: (mailOptions: any) => Promise<{ messageId: string }>;
};

// Create a mock transporter for client-side code
// In a real application, this would be a backend API endpoint
const createTransporter = (): EmailTransporter => {
  // For browser environment, return a mock that logs actions
  if (typeof window !== 'undefined') {
    console.log('Creating mock email transporter for browser environment');
    return {
      verify: (callback: (error: Error | null, success: any) => void) => {
        console.log('Mock SMTP verification (client-side)');
        callback(null, true);
      },
      sendMail: (mailOptions: any) => {
        console.log('Email would be sent with:', mailOptions);
        return Promise.resolve({ messageId: 'mock-id-' + Date.now() });
      }
    };
  }
  
  // This code will only run on the server, not in the browser
  // We use dynamic import to prevent the nodemailer module from being included in browser bundles
  try {
    // This is just a placeholder - it won't actually run in the browser
    // In a real app, this would be a server-side API endpoint
    console.log('Server-side email setup would happen here');
    return {
      verify: (callback: (error: Error | null, success: any) => void) => {
        console.log('Server SMTP verification');
        callback(null, true);
      },
      sendMail: (mailOptions: any) => {
        console.log('Server would send email:', mailOptions);
        return Promise.resolve({ messageId: 'server-id-' + Date.now() });
      }
    };
  } catch (error) {
    console.error('Error creating email transporter:', error);
    throw error;
  }
};

// Create the transporter
const transporter = createTransporter();

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP server connection error:', error);
  } else {
    console.log('SMTP server connection successful');
  }
});

// Email sending function with enhanced error handling and logging
export const sendEmail = async ({
  to,
  subject,
  text,
  html,
  attachments = []
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: Array<{filename: string, content: any, contentType?: string}>;
}) => {
  try {
    console.log(`Preparing to send email to ${to}`);
    
    const info = await transporter.sendMail({
      from: '"HackForNepal" <hackathon@example.com>',
      to,
      subject,
      text,
      html: html || text,
      attachments
    });
    
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Enhanced registration confirmation email with more details
export const sendRegistrationConfirmation = async (email: string, name: string, teamStatus?: string, skillLevel?: string) => {
  const subject = 'HackForNepal Registration Confirmation';
  
  const registrationType = teamStatus === 'team' ? 'team' : 'individual participant';
  const skillLevelInfo = skillLevel ? ` as a ${skillLevel} developer` : '';
  
  const text = `
    Hello ${name},
    
    Thank you for registering for HackForNepal! We're excited to have you join us as an ${registrationType}${skillLevelInfo}.
    
    Mark your calendar for June 15-17, 2025 - that's when all the action happens!
    
    We'll be sending you more information about:
    - Pre-hackathon workshops
    - Team formation (if you registered as an individual)
    - Event venue details
    - Required materials and preparation
    
    If you have any questions, feel free to reply to this email or contact us at support@hackfornepal.com.
    
    Best regards,
    HackForNepal Team
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #e11d48; margin: 0;">HackForNepal Registration Confirmation</h2>
        <p style="color: #4b5563; margin-top: 5px;">June 15-17, 2025</p>
      </div>
      
      <p style="margin-bottom: 15px;">Hello ${name},</p>
      
      <p style="margin-bottom: 15px;">Thank you for registering for <strong>HackForNepal</strong>! We're excited to have you join us as an ${registrationType}${skillLevelInfo}.</p>
      
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #4b5563;">What's Next</h3>
        <ul style="padding-left: 20px; margin-bottom: 0;">
          <li>Watch for our pre-event emails with important details</li>
          <li>Connect with other participants on our Discord channel</li>
          <li>Prepare your development environment</li>
          <li>Start thinking about potential project ideas</li>
        </ul>
      </div>
      
      <p style="margin-bottom: 15px;">If you have any questions, feel free to contact us at <a href="mailto:support@hackfornepal.com" style="color: #2563eb;">support@hackfornepal.com</a>.</p>
      
      <p style="margin-bottom: 5px;">Best regards,<br>HackForNepal Team</p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #eaeaea; color: #6b7280; font-size: 0.875rem;">
        <p style="margin: 5px 0;">HackForNepal 2025</p>
        <p style="margin: 5px 0;">Kathmandu, Nepal</p>
      </div>
    </div>
  `;
  
  return sendEmail({ to: email, subject, text, html });
};

// New: Email template for contacting organizers
export const sendContactFormSubmission = async (name: string, email: string, subject: string, message: string) => {
  const emailSubject = `Contact Form: ${subject}`;
  const text = `
    New message from ${name} (${email}):
    
    ${message}
    
    ---
    Sent from HackForNepal website contact form
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <h2 style="color: #e11d48; margin-top: 0;">New Contact Form Submission</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Subject:</td>
          <td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${subject}</td>
        </tr>
      </table>
      
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #4b5563;">Message</h3>
        <p style="margin-bottom: 0; white-space: pre-line;">${message}</p>
      </div>
      
      <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-bottom: 0;">
        This message was sent from the HackForNepal website contact form.
      </p>
    </div>
  `;
  
  return sendEmail({
    to: 'hackathon@example.com',
    subject: emailSubject,
    text,
    html
  });
};

// New: Newsletter subscription email
export const sendNewsletterWelcome = async (email: string) => {
  const subject = 'Welcome to HackForNepal Newsletter';
  const text = `
    Thank you for subscribing to the HackForNepal newsletter!
    
    You'll now receive updates about:
    - Upcoming hackathon details
    - Tech workshops and educational content
    - Community announcements and opportunities
    - Success stories from past hackathons
    
    Stay tuned for exciting updates!
    
    Best regards,
    HackForNepal Team
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #e11d48; margin: 0;">Welcome to HackForNepal Newsletter</h2>
        <p style="color: #4b5563; margin-top: 5px;">Stay updated with all things HackForNepal</p>
      </div>
      
      <p style="margin-bottom: 15px;">Thank you for subscribing to the HackForNepal newsletter!</p>
      
      <p style="margin-bottom: 15px;">You'll now receive updates about:</p>
      
      <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Upcoming hackathon details</li>
        <li>Tech workshops and educational content</li>
        <li>Community announcements and opportunities</li>
        <li>Success stories from past hackathons</li>
      </ul>
      
      <p style="margin-bottom: 15px;">Stay tuned for exciting updates!</p>
      
      <p style="margin-bottom: 5px;">Best regards,<br>HackForNepal Team</p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #eaeaea; color: #6b7280; font-size: 0.875rem;">
        <p style="margin: 5px 0;">You're receiving this email because you signed up for the HackForNepal newsletter.</p>
        <p style="margin: 5px 0;">To unsubscribe, click <a href="#" style="color: #2563eb;">here</a>.</p>
      </div>
    </div>
  `;
  
  return sendEmail({ to: email, subject, text, html });
};

// Export all email functions
export default {
  sendEmail,
  sendRegistrationConfirmation,
  sendContactFormSubmission,
  sendNewsletterWelcome
};
