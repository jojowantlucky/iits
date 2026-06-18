import { NextRequest, NextResponse } from "next/server";

const SIGNUP_PAGE = "https://gem.godaddy.com/signups/def2cdcbdb4b467a9fd97abb1cf88f44/join";
const SUBMIT_URL  = "https://gem.godaddy.com/signups/standard_subscribe/def2cdcbdb4b467a9fd97abb1cf88f44";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    // Fetch fresh CSRF token from GoDaddy
    const pageRes = await fetch(SIGNUP_PAGE);
    const html    = await pageRes.text();
    const match   = html.match(/name="authenticity_token"\s+value="([^"]+)"/);
    if (!match) throw new Error("No CSRF token found");
    const token = match[1];

    // POST to GoDaddy
    const body = new URLSearchParams({
      authenticity_token: token,
      "contact[email]":   email,
    });

    await fetch(SUBMIT_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:    body.toString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}