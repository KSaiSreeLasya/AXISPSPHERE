import type { RequestHandler } from "express";

export const handleContact: RequestHandler = async (req, res) => {
  const SUPA_URL = process.env.SUPABASE_URL;
  const SUPA_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPA_URL || !SUPA_SERVICE_KEY) {
    return res.status(500).json({ error: "Supabase service key or URL not configured on server. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." });
  }

  const { name, email, phone, subject, message, consent, metadata } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email or message" });
  }

  const payload = {
    name: String(name),
    email: String(email),
    phone: phone ? String(phone) : null,
    subject: subject ? String(subject) : null,
    message: String(message),
    consent: !!consent,
    metadata: metadata || {}
  };

  try {
    const url = `${SUPA_URL.replace(/\/$/, "")}/rest/v1/contact_messages`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPA_SERVICE_KEY,
        Authorization: `Bearer ${SUPA_SERVICE_KEY}`,
        Prefer: "return=representation"
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    let body: any = null;
    try { body = JSON.parse(text); } catch { body = text; }

    if (!response.ok) {
      console.error("Supabase insert failed", { status: response.status, body });
      return res.status(response.status).json({ error: body || `Supabase responded ${response.status}` });
    }

    return res.status(200).json({ success: true, data: body });
  } catch (err: any) {
    console.error("Contact route error", err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
};
