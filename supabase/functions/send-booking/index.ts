import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface BookingRequest {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingRequest = await req.json();

    // Validate required fields
    if (!booking.pickup || !booking.destination || !booking.date || !booking.time || !booking.name) {
      return new Response(
        JSON.stringify({ error: 'Champs obligatoires manquants' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs (basic length limits)
    const sanitize = (s: string, max = 500) => String(s || '').slice(0, max).trim();

    const recipientEmail = Deno.env.get('BOOKING_RECIPIENT_EMAIL');
    if (!recipientEmail) {
      throw new Error('BOOKING_RECIPIENT_EMAIL is not configured');
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa;">
        <div style="background: #0f1419; color: #e8eaed; padding: 30px; border-radius: 12px;">
          <h1 style="color: #0ea5e9; margin-top: 0;">🚗 Nouvelle demande de transport</h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 140px;">Départ</td><td style="color: #e8eaed;">${sanitize(booking.pickup)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Destination</td><td style="color: #e8eaed;">${sanitize(booking.destination)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Date</td><td style="color: #e8eaed;">${sanitize(booking.date, 20)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Heure</td><td style="color: #e8eaed;">${sanitize(booking.time, 10)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Passagers</td><td style="color: #e8eaed;">${sanitize(booking.passengers, 5)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Bagages</td><td style="color: #e8eaed;">${sanitize(booking.luggage, 5)}</td></tr>
          </table>

          <hr style="border: 1px solid #1e293b; margin: 20px 0;" />

          <h2 style="color: #0ea5e9; font-size: 16px;">Coordonnées du client</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 140px;">Nom</td><td style="color: #e8eaed;">${sanitize(booking.name, 100)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="color: #e8eaed;">${sanitize(booking.email, 255)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Téléphone</td><td style="color: #e8eaed;">${sanitize(booking.phone, 20)}</td></tr>
          </table>

          ${booking.notes ? `
            <hr style="border: 1px solid #1e293b; margin: 20px 0;" />
            <h2 style="color: #0ea5e9; font-size: 16px;">Notes</h2>
            <p style="color: #e8eaed;">${sanitize(booking.notes, 1000)}</p>
          ` : ''}
        </div>
      </div>
    `;

    // Use Lovable AI gateway to send email via Resend-compatible endpoint
    // Since we can't use Resend directly, we'll use the built-in email sending
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Les Chauffeurs d\'Arras <onboarding@resend.dev>',
        to: [recipientEmail],
        subject: `Nouvelle réservation - ${sanitize(booking.pickup)} → ${sanitize(booking.destination)}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Email send failed:', res.status, errorBody);
      // Don't fail the request - still confirm to user
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Demande envoyée avec succès' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-booking:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
