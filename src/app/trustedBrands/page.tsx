"use client";

export default function TrustedBrands() {
  const logos = [
    "https://i.postimg.cc/1XhzhCXf/client-logo-1.png",
    "https://i.postimg.cc/j2HSsHnv/client-logo-2.png",
    "https://i.postimg.cc/44Vdbg2t/client-logo-3.png",
    "https://i.postimg.cc/ZKmqwMXQ/client-logo-4.png",
  ];

  return (
    <section className="slider relative overflow-hidden py-10">
      <div className="logo-slider flex animate-logoSlider">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="mx-10 h-12 flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
