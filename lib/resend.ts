import { Resend } from 'resend';

// The Resend client is created on first use, so the site still builds and runs when RESEND_API_KEY
// is not set (the forms then answer with an error instead of crashing the build).
let client: Resend | null = null;
export function getResend(): Resend | null {
    if (!process.env.RESEND_API_KEY) return null;
    if (!client) client = new Resend(process.env.RESEND_API_KEY);
    return client;
}

// Email configuration
export const EMAIL_CONFIG = {
    // EMAIL_FROM must use a domain verified in Resend; onboarding@resend.dev only delivers to the
    // Resend account owner's own address.
    from: process.env.EMAIL_FROM || 'Incubia Algérie <onboarding@resend.dev>',
    to: process.env.ADMIN_EMAIL || 'contact@incuba-dz.com',
    replyTo: process.env.EMAIL_REPLY_TO || 'contact@incuba-dz.com',
};
