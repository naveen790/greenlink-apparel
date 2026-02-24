import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, phone, message, fax_number } = body;

    if (fax_number) {
      console.log("Bot detected via Honeypot.");
      return NextResponse.json({ message: "Success" }, { status: 200 }); // "Fake" success to fool the bot
    }

    // 2. BASIC VALIDATION
    if (!name || !email || message.length < 5) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // 1. Internal Notification (Sent to YOU at Zoho)
    // This uses a "Reply-To" so you can just hit reply to talk to the client.
    await resend.emails.send({
      from: 'GreenLink System <info@greenlinkapparel.com>',
      to: ['info@greenlinkapparel.com'],
      subject: `Production Inquiry- Lead: ${name}`,
      replyTo: email, 
      text: `Hello,\n\n We got the following lead from our site. \nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    });

    // 2. Client Confirmation (Sent to the USER)
    // This is formatted with HTML to look like a premium brand.
    const clientData = await resend.emails.send({
        from: 'GreenLink Apparel <info@greenlinkapparel.com>',
        to: [email],
        subject: 'Inquiry Received | GreenLink Apparel',
        html: `
            <div style="background-color: #fdfcf9; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #eee;">
                
                <tr>
                <td align="center" style="padding: 40px 0 20px 0;">
                    <img src="https://greenlinkapparel.com/apple-touch-icon.png" width="80" alt="GreenLink Logo" style="display: block; margin-bottom: 15px;" />
                    
                    <h1 style="font-family: 'Times New Roman', Times, serif; font-size: 24px; font-style: italic; font-weight: normal; letter-spacing: 2px; margin: 0; color: #1a1a1a; text-transform: uppercase;">
                    GreenLink Apparel
                    </h1>
                    
                    <p style="text-transform: uppercase; font-size: 9px; letter-spacing: 4px; margin-top: 8px; color: #c5a059; font-weight: bold;">
                    Strategic Sourcing Excellence
                    </p>
                </td>
                </tr>

                <tr>
                <td style="padding: 40px 50px;">
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                    Dear ${name},
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                    We have successfully received your inquiry regarding ${message}. 
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                    Our sourcing team is currently reviewing your details. We will reach out to you shortly to discuss the next steps and technical specifications.
                    </p>
                    
                    <div style="border-left: 3px solid #c5a059; padding-left: 20px; margin: 30px 0;">
                    <p style="font-size: 14px; color: #555; font-style: italic;">
                        Connecting world-class design with ethical, high-volume manufacturing.
                    </p>
                    </div>
                </td>
                </tr>

                <tr>
                <td style="padding: 0 50px 40px 50px;" align="center">
                    <a href="https://greenlinkapparel.com#gallery" 
                    style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 15px 35px; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                    View Our Collection
                    </a>
                </td>
                </tr>

                <tr>
                <td align="center" style="background-color: #1a1a1a; padding: 30px; color: #ffffff;">
                    <p style="font-size: 11px; margin: 0; opacity: 0.5;">
                    &copy; 2026 GreenLink Apparel. All rights reserved.
                    </p>
                </td>
                </tr>
            </table>
            </div>
        `,
        });
    return NextResponse.json(clientData);
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}