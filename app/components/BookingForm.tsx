"use client";
import { useEffect } from "react";

export default function BookingForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://noteworthy-djs.checkcherry.com/api/checkcherry_widgets";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[11px] tracking-[.18em] uppercase text-[var(--muted)] mb-2">
          Get In Touch
        </p>
        <h2 className="font-display text-5xl mb-4" style={{ color: "var(--ink)" }}>
          Book Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
        <div
          className="checkcherry__widget__contact-form"
          data-props='{"apiKey":"9CN-KW79-NM7","contactFormId":19939,"iframe":false,"host":"https://noteworthy-djs.checkcherry.com"}'
        />
      </div>
    </section>
  );
}