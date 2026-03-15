import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    // Vérification reCAPTCHA
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      },
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { message: "Vérification reCAPTCHA échouée." },
        { status: 400 },
      );
    }

    // Envoi via Formspree
    const formspreeRes = await fetch("https://formspree.io/f/xbdzyplz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { message: "Erreur lors de l'envoi." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Message envoyé !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur API :", error);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}
