import { NextRequest, NextResponse } from 'next/server';
import { getResend, EMAIL_CONFIG } from '@/lib/resend';
import { generateContactEmail, generateContactConfirmationEmail } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, company, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const resend = getResend();
        if (!resend) {
            console.error('RESEND_API_KEY is not set: contact message not sent');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
        }

        // Send email to admin
        const adminEmail = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to: EMAIL_CONFIG.to,
            replyTo: email,
            subject: `Nouveau message de ${firstName} ${lastName}`,
            html: generateContactEmail({
                firstName,
                lastName,
                email,
                phone,
                company,
                message,
            }),
        });

        // Resend reports failures in `error` instead of throwing: without this check the visitor
        // was told "Message envoyé" even when nothing reached Incubia.
        if (adminEmail.error) {
            console.error('Resend refused the admin email:', adminEmail.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
        }

        // Send confirmation email to user
        const userEmail = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to: email,
            replyTo: EMAIL_CONFIG.replyTo,
            subject: 'Merci de nous avoir contactés - Incubia Algérie',
            html: generateContactConfirmationEmail(firstName),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully',
                adminEmailId: adminEmail.data?.id,
                userEmailId: userEmail.data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
