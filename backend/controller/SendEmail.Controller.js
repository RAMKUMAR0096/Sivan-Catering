import nodemailer from 'nodemailer';

export async function SendEmail(request, response) {
    try {
        const { name, email, phone, eventType, eventDate, guestCount } = request.body;

    
        if (!name || !email || !phone || !eventType || !eventDate || !guestCount) {
            return response.status(400).json({
                message: "Please provide all required fields: name, email, phone, eventType, eventDate, guestCount",
                error: true,
                success: false
            });
        }

       
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_USERNAME,
                pass: process.env.NODEMAILER_APP_PASSWORD
            }
        });

        const bookingDetailsHTML = `
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Guest Count:</strong> ${guestCount}</p>
        `;

        const customerMailOptions = {
            from: `Sivan Catering <${process.env.COMPANY_EMAIL}>`,
            to: email,
            subject: 'Catering Booking Confirmation - Sivan Catering',
            html: `
                <p>Hello ${name},</p>
                <p>Thank you for booking with <strong>Sivan Catering</strong>!</p>
                <p>We’ve received your catering request. Here are the details:</p>
                ${bookingDetailsHTML}
                <p>We’ll reach out to you shortly to finalize everything.</p>
                <br/>
                <p>Best regards,</p>
                <p><strong>The Sivan Catering Team</strong></p>
            `
        };

  
        const ownerMailOptions = {
            from: `Sivan Catering <${process.env.COMPANY_EMAIL}>`,
            to: process.env.OWNER_EMAIL,
            subject: 'New Catering Booking Received',
            html: `
                <p>You have received a new catering booking:</p>
                ${bookingDetailsHTML}
                <br/>
                <p>Make sure to follow up with the customer as soon as possible.</p>
            `
        };


        await transporter.sendMail(customerMailOptions);
        await transporter.sendMail(ownerMailOptions);

        return response.status(200).json({
            message: "Booking confirmation sent to customer and owner.",
            success: true
        });

    } catch (error) {
        console.error("Email sending error:", error);
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
