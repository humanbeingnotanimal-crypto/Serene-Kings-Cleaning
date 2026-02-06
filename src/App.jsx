import React from "react";

// MAIN APP
export default function App() {
  const container = {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    background: "#f0fdf4",
    minHeight: "100vh",
    color: "#064e3b",
  };

  const maxWrap = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const cardShadow = "0 12px 30px rgba(0,0,0,0.10)";

  const primaryBtn = {
    display: "inline-block",
    marginTop: "18px",
    padding: "12px 22px",
    backgroundColor: "#059669",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700,
  };

  const secondaryBtn = {
    display: "inline-block",
    marginTop: "18px",
    marginLeft: "10px",
    padding: "12px 22px",
    backgroundColor: "rgba(255,255,255,0.92)",
    color: "#065f46",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(6,95,70,0.20)",
  };

  return (
    <div style={container}>
      {/* TOP HEADER */}
      <header style={{ textAlign: "center", padding: "28px 20px 10px" }}>
        <img
          src="/logo.svg"
          alt="Serene Kings Cleaning"
          style={{ height: "90px", marginBottom: "10px" }}
        />
        <h1 style={{ fontSize: "38px", color: "#065f46", margin: "0 0 6px" }}>
          Serene Kings Cleaning Services Ltd
        </h1>
        <p style={{ fontSize: "18px", color: "#065f46", margin: "0 auto", maxWidth: "820px" }}>
          Professional Cleaning Services for Homes & Offices in London & Surrounding Areas
        </p>
      </header>

      {/* WIDE BACKGROUND BANNER (use office image) */}
      <section style={{ padding: "10px 0 0" }}>
        <div
          style={{
            ...maxWrap,
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: cardShadow,
            backgroundImage: "url(/cleaning-3.jpg)", // use your "office" photo here
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "320px",
            position: "relative",
          }}
        >
          {/* dark overlay for readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(6,95,70,0.80), rgba(6,95,70,0.25))",
            }}
          />
          <div
            style={{
              position: "relative",
              padding: "34px 22px",
              maxWidth: "720px",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "32px", margin: "0 0 10px" }}>
              A spotless space, every time.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
              Domestic and commercial cleaning delivered with care, consistency, and attention to detail.
              Fast quotes by phone, WhatsApp, or the contact form below.
            </p>

            <div style={{ marginTop: "14px" }}>
              <a href="tel:02045136327" style={primaryBtn}>
                Call Now
              </a>
              <a
                href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
                target="_blank"
                rel="noopener noreferrer"
                style={secondaryBtn}
              >
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS (premium grid) */}
      <section style={{ padding: "34px 0 10px" }}>
        <div style={maxWrap}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <h2 style={{ color: "#065f46", fontSize: "28px", margin: 0 }}>Our Cleaning Work</h2>
            <p style={{ margin: "8px auto 0", maxWidth: "820px", color: "#065f46" }}>
              A few examples of the standard we aim for — clean, fresh, and welcoming.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
              alignItems: "stretch",
            }}
          >
            {[
              { src: "/cleaning-1.jpg", alt: "Professional cleaning service" },
              { src: "/cleaning-2.jpg", alt: "Family home cleaning service" },
              { src: "/cleaning-3.jpg", alt: "Office & commercial cleaning service" },
            ].map((img) => (
              <div
                key={img.src}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(6,95,70,0.10)",
                }}
              >
                <div style={{ height: "220px", background: "#e8f5ef" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover", // prevents stretching
                      display: "block",
                    }}
                    onError={(e) => {
                      // If a filename is wrong, show a clean placeholder instead of a broken icon
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.style.display = "flex";
                      e.currentTarget.parentElement.style.alignItems = "center";
                      e.currentTarget.parentElement.style.justifyContent = "center";
                      e.currentTarget.parentElement.style.color = "#065f46";
                      e.currentTarget.parentElement.style.fontWeight = "700";
                      e.currentTarget.parentElement.innerText = "Photo not found — check filename in /public";
                    }}
                  />
                </div>
                <div style={{ padding: "14px 14px 16px" }}>
                  <div style={{ fontWeight: 800, color: "#065f46" }}>{img.alt}</div>
                  <div style={{ marginTop: "6px", color: "#0f5132", fontSize: "14px", lineHeight: 1.5 }}>
                    Clean, detailed, and finished to a high standard.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "28px 0 10px" }}>
        <div style={maxWrap}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              border: "1px solid rgba(6,95,70,0.10)",
              padding: "22px",
            }}
          >
            <h2 style={{ color: "#065f46", fontSize: "28px", margin: "0 0 10px" }}>
              About Serene Kings Cleaning
            </h2>

            <p style={{ fontSize: "16px", lineHeight: 1.75, margin: "0 0 10px" }}>
              Serene Kings Cleaning Services Ltd provides reliable domestic and commercial cleaning across
              London and surrounding areas. From regular home cleaning to deep cleans, end of tenancy,
              and office cleaning — we tailor each service to your needs and standards.
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.75, margin: "0 0 14px" }}>
              We focus on quality, consistency, and clear communication — arriving on time and leaving
              your space spotless, fresh, and welcoming.
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {[
                "Domestic & commercial cleaning",
                "High attention to detail",
                "Flexible bookings",
                "Fast quotes by phone or WhatsApp",
                "Professional & reliable",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#dcfce7",
                    color: "#065f46",
                    padding: "10px 12px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "13px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        style={{
          maxWidth: "560px",
          margin: "30px auto 50px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            border: "1px solid rgba(6,95,70,0.10)",
            padding: "18px",
          }}
        >
          <h2 style={{ margin: "6px 0 14px", color: "#065f46", textAlign: "center" }}>
            Get a Fast Quote
          </h2>

          <form
            name="contact"
            method="POST"
            action="/thanks.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Netlify honeypot (ONLY ONE) */}
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(6,95,70,0.20)",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(6,95,70,0.20)",
              }}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(6,95,70,0.20)",
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(6,95,70,0.20)",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#059669",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "12px" }}>
            <a
              href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                backgroundColor: "#22c55e",
                color: "#fff",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section style={{ textAlign: "center", paddingBottom: "60px" }}>
        <a
          href="https://www.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London,+WC2H+9JQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#059669",
            fontWeight: 800,
            textDecoration: "underline",
          }}
        >
          View on Google Maps
        </a>
      </section>
    </div>
  );
}
