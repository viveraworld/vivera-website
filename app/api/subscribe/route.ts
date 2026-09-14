import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const consent = body.consent === true;

    const email = String(body.email || "")
      .trim()
      .toLowerCase();


    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    if (!consent) {
  return NextResponse.json(
    { error: "Consent is required" },
    { status: 400 }
  );
}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Newsletter consent is required" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Supabase environment variables are missing");

      return NextResponse.json(
        { error: "Supabase is not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseServiceRoleKey
    );

    const { error } = await supabase
  .from("users")
  .upsert(
    {
      email: email,
      source: "vivera.world",
      newsletter: true,
      newsletter_consent: true,
      newsletter_consent_at: new Date().toISOString(),
      newsletter_consent_version: "1.0",
      subscription_status: "free",
    },
    {
      onConflict: "email",
    }
  );

    if (error) {
      console.error("Supabase database error:", error);

      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Subscribe error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}