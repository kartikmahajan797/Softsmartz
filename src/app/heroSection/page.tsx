export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen grid place-items-center overflow-hidden m-0 p-0">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://www.softura.com/wp-content/uploads/2024/11/Home-page-video-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Softsmartz
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Partner with us to experience the future, today.
        </p>
      </div>
    </section>
  );
}
