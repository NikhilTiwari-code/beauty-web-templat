"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import BeforeAfterSlider from "./BeforeAfterSlider";
import WhatsAppBooking from "./WhatsAppBooking";

const HERO_SLIDES = [
  {
    image: "/images/bridal_makeup.png",
    title: "Signature Bridal Makeup",
    subtitle: "Monica Sinha's specialized HD & Airbrush bridal packages. Designed to make you look flawless on your big day.",
    link: "#booking",
    cta: "Book Bridal Package"
  },
  {
    image: "/images/hair_styling.png",
    title: "Expert Hair Care & Coloring",
    subtitle: "Global hair coloring, Keratin smoothing, and precision cuts. Bring life back to your hair.",
    link: "#services",
    cta: "Explore Hair Services"
  },
  {
    image: "/images/nail_art.png",
    title: "Luxury Nail Extensions & Art",
    subtitle: "Premium gel nail extensions and custom handcrafted designs. Styled to perfection.",
    link: "#services",
    cta: "View Nail Services"
  },
  {
    image: "/images/skincare_facial.png",
    title: "Revitalizing Skincare & Spa",
    subtitle: "O3+ facial therapies, luxury HydraFacials, and clinical skin care solutions for ultimate rejuvenation.",
    link: "#booking",
    cta: "Schedule Skincare Session"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide hero images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <Navbar />

      {/* HERO CAROUSEL */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-brand-charcoal" id="home">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              zIndex: currentSlide === idx ? 10 : 0,
              transition: "opacity 1000ms ease-in-out",
              pointerEvents: currentSlide === idx ? "auto" : "none"
            }}
          >
            <div className="absolute inset-0 bg-brand-charcoal/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{
                transform: currentSlide === idx ? "scale(1.05)" : "scale(1)",
                transition: "transform 5000ms ease-out",
                objectPosition: "center 20%"
              }}
            />
            <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 max-w-4xl z-20 text-white space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight drop-shadow-md animate-fade-in-up">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                {slide.subtitle}
              </p>
              <div className="pt-4 flex gap-4">
                <a
                  href={slide.link}
                  className="bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-md transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-30">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-brand-pink" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WELCOME INTRO */}
      <section className="py-20 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12" id="about">
        <div className="w-full lg:w-1/2 space-y-6 ">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Welcome to Monica's Lounge</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal leading-tight">
            Elevating Bridal Artistry &amp; Hair styling in Patna
          </h3>
          <div className="w-16 h-0.5 bg-brand-pink"></div>
          <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
            With over 15 years of professional makeup experience, **Monica's Beauty Lounge** stands as Kankarbagh's premier salon. Founded by certified bridal artist **Monica Sinha**, we bring modern cosmetics science and classical artistry to curate your dream look.
          </p>
          <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
            Whether you want custom airbrush makeup for your wedding, a luxurious keratin smoothing treatment, or creative gel extensions, we customize every treatment using premium branded products (MAC, Kryolan, NARS, O3+) to guarantee you look absolutely breathtaking.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-pink-light text-brand-pink flex items-center justify-center font-bold text-sm">✓</span>
              <span className="text-xs font-semibold text-brand-charcoal">Certified Makeup Artists</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-pink-light text-brand-pink flex items-center justify-center font-bold text-sm">✓</span>
              <span className="text-xs font-semibold text-brand-charcoal">Premium Cosmetics Only</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-pink-light text-brand-pink flex items-center justify-center font-bold text-sm">✓</span>
              <span className="text-xs font-semibold text-brand-charcoal">Hygienic Sanitized Studio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-pink-light text-brand-pink flex items-center justify-center font-bold text-sm">✓</span>
              <span className="text-xs font-semibold text-brand-charcoal">Bridal Consultation Trials</span>
            </div>
          </div>
        </div>

        {/* Video / Logo visual block */}
        <div className="w-full lg:w-1/2 flex justify-center " style={{ transitionDelay: "150ms" }}>
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-pink-light bg-brand-pink-light flex flex-col items-center justify-center p-8 text-center gap-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-brand-pink-light/35 opacity-90 z-0"></div>
            <div className="z-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-pink text-white flex items-center justify-center mx-auto text-xl font-bold shadow-lg">
                ✨
              </div>
              <h4 className="font-serif text-2xl font-bold text-brand-charcoal">Indian Bridal Specialist</h4>
              <p className="text-xs text-brand-charcoal/60 max-w-xs mx-auto leading-relaxed">
                "Bridal makeup is not about painting a face; it is about bringing out the inner radiance of a bride."
              </p>
              <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">— Monica Sinha, Founder</p>
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-charcoal hover:bg-brand-pink text-white text-xs font-bold tracking-widest rounded-lg transition-colors shadow-md mt-4"
              >
                REQUEST BRIDAL TRIAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STUDIO SERVICES (Alternating Rows) */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-16 border-t border-brand-pink-light/35" id="studio-services">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 ">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">What We Do Best</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Our Studio Services
          </h3>
          <div className="w-16 h-0.5 bg-brand-pink mx-auto"></div>
        </div>

        {/* Category 1: Skincare */}
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-brand-pink-light">
            <img
              src="/images/skincare_facial.png"
              alt="Skincare"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h4 className="font-serif text-2xl font-bold text-brand-charcoal flex items-center gap-2">
              <span className="text-brand-pink text-3xl font-bold">01.</span> Skincare
            </h4>
            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
              It doesn’t matter how old you are, everyone’s skin requires proper care for it to look its best. The truth is, everyone’s skin is different, so no two treatments can be exactly the same. Whatever the case may be, a professional skincare evaluation and session is the key to unlocking clearer, brighter, and smoother skin! At Monica's Lounge, we offer varying levels of treatments to suit your skincare needs. As always, every service will start with a consultation so that you can discuss your current concerns and skincare goals. Your esthetician can help you to select which skincare treatment that is best for you. For more information we invite you to visit our Skincare Services page.
            </p>
            <a href="#booking" className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors pt-2">
              Book Skincare Consultation &rarr;
            </a>
          </div>
        </div>

        {/* Category 2: Waxing */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 ">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-brand-pink-light">
            <img
              src="/images/hair_styling.png"
              alt="Waxing Services"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h4 className="font-serif text-2xl font-bold text-brand-charcoal flex items-center gap-2">
              <span className="text-brand-pink text-3xl font-bold">02.</span> Waxing
            </h4>
            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
              At Monica's Lounge we perform all of our waxing services with the utmost care and consideration. Our estheticians are expertly skilled in face and body waxing. We use blue french hard wax, sugaring, and or soft wax. We offer three different types of wax for your preference. All of our waxing services are performed hygienically by employing a strict “no double-dipping” policy. Please Note: Facial waxing is NOT recommended for clients on Accutane, Retin A, Tazorac, Differin, or who have recently had chemical or laser peels. If this applies to you please inform us so that we can discuss alternative options. For more information we invite you to visit our Waxing Services page.
            </p>
            <a href="#booking" className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors pt-2">
              Book Waxing Session &rarr;
            </a>
          </div>
        </div>

        {/* Category 3: Eyelashes */}
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-brand-pink-light">
            <img
              src="/images/nail_art.png"
              alt="Eyelashes"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h4 className="font-serif text-2xl font-bold text-brand-charcoal flex items-center gap-2">
              <span className="text-brand-pink text-3xl font-bold">03.</span> Eyelashes
            </h4>
            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
              Monica's Lounge promises to deliver to each individual client the best Eye Lash extension experience: First, a consultation between the client and our eyelash stylist to assess the distinctive eye shape, the quality of the natural lashes and the skin tone. Various lengths, curvatures and widths of lashes are carefully selected to create each custom set of eyelashes for you. All our stylists are highly trained and meticulous with ensuring exact symmetry with every applied lash, crisscross lash application is not tolerated. The adhesive used is medical grade and FDA approved. For more information we invite you to visit our Eyelash Services page.
            </p>
            <a href="#booking" className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-colors pt-2">
              Book Lash Extensions &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER TRANSFORMATIONS */}
      <section className="bg-brand-pink-light py-20 px-4" id="before-after">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="space-y-4 max-w-2xl ">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Transformation Gallery</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              Witness the Magic
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed max-w-lg mx-auto">
              Compare the natural look with our signature HD bridal makeup finish. Drag the central handle to slide the view.
            </p>
          </div>

          <div className="w-full flex justify-center " style={{ transitionDelay: "150ms" }}>
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING GRID */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="services">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16 ">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Premium Services</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Signature Parlor Treatments
          </h3>
          <div className="w-16 h-0.5 bg-brand-pink mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-charcoal/60 max-w-md mx-auto leading-relaxed">
            Professional salon packages custom-formulated for your individual beauty and grooming goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Group 1: Bridal */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 ">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Bridal &amp; Glamour</span>
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Bridal Makeup</h4>
              <p className="text-xs text-brand-charcoal/50 leading-relaxed">HD &amp; Airbrush options utilizing high-end international makeup palettes.</p>
              <ul className="space-y-2 text-xs text-brand-charcoal/70 border-t border-brand-pink-light pt-4">
                <li className="flex justify-between"><span>HD Bridal Makeup</span> <span className="font-bold text-brand-pink">₹12,000</span></li>
                <li className="flex justify-between"><span>Airbrush Makeup</span> <span className="font-bold text-brand-pink">₹18,000</span></li>
                <li className="flex justify-between"><span>Engagement Look</span> <span className="font-bold text-brand-pink">₹6,000</span></li>
                <li className="flex justify-between"><span>Party Makeup</span> <span className="font-bold text-brand-pink">₹3,000</span></li>
              </ul>
            </div>
            <a href="#booking" className="block text-center bg-brand-pink-light hover:bg-brand-pink text-brand-pink hover:text-white text-xs font-bold py-3 rounded-xl transition-all">
              BOOK PACKAGES
            </a>
          </div>

          {/* Service Group 2: Hair */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 " style={{ transitionDelay: "100ms" }}>
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Hair Care &amp; Style</span>
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Hair Artistry</h4>
              <p className="text-xs text-brand-charcoal/50 leading-relaxed">Smoothening, deep conditioning, spas, and designer coloring treatments.</p>
              <ul className="space-y-2 text-xs text-brand-charcoal/70 border-t border-brand-pink-light pt-4">
                <li className="flex justify-between"><span>Premium Hair Cut</span> <span className="font-bold text-brand-pink">₹800</span></li>
                <li className="flex justify-between"><span>Global Hair Color</span> <span className="font-bold text-brand-pink">₹3,500</span></li>
                <li className="flex justify-between"><span>Keratin Treatment</span> <span className="font-bold text-brand-pink">₹5,000</span></li>
                <li className="flex justify-between"><span>L'Oreal Hair Spa</span> <span className="font-bold text-brand-pink">₹1,500</span></li>
              </ul>
            </div>
            <a href="#booking" className="block text-center bg-brand-pink-light hover:bg-brand-pink text-brand-pink hover:text-white text-xs font-bold py-3 rounded-xl transition-all">
              BOOK HAIR CARE
            </a>
          </div>

          {/* Service Group 3: Skincare */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 " style={{ transitionDelay: "200ms" }}>
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Skincare &amp; Facials</span>
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Skin Care</h4>
              <p className="text-xs text-brand-charcoal/50 leading-relaxed">Rejuvenating facials using dermocosmetics for instant hydration and glow.</p>
              <ul className="space-y-2 text-xs text-brand-charcoal/70 border-t border-brand-pink-light pt-4">
                <li className="flex justify-between"><span>O3+ Bridal Glow</span> <span className="font-bold text-brand-pink">₹2,500</span></li>
                <li className="flex justify-between"><span>Luxury HydraFacial</span> <span className="font-bold text-brand-pink">₹4,000</span></li>
                <li className="flex justify-between"><span>O3+ D-Tan Therapy</span> <span className="font-bold text-brand-pink">₹1,000</span></li>
                <li className="flex justify-between"><span>Diamond Facial</span> <span className="font-bold text-brand-pink">₹1,800</span></li>
              </ul>
            </div>
            <a href="#booking" className="block text-center bg-brand-pink-light hover:bg-brand-pink text-brand-pink hover:text-white text-xs font-bold py-3 rounded-xl transition-all">
              BOOK SKINCARE
            </a>
          </div>

          {/* Service Group 4: Nails */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 " style={{ transitionDelay: "300ms" }}>
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Nail Styling</span>
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Nails &amp; Spa</h4>
              <p className="text-xs text-brand-charcoal/50 leading-relaxed">Acrylic overlays, French designs, and luxury foot reflexology treatments.</p>
              <ul className="space-y-2 text-xs text-brand-charcoal/70 border-t border-brand-pink-light pt-4">
                <li className="flex justify-between"><span>Gel Extensions</span> <span className="font-bold text-brand-pink">₹1,500</span></li>
                <li className="flex justify-between"><span>Custom Nail Art</span> <span className="font-bold text-brand-pink">₹800</span></li>
                <li className="flex justify-between"><span>Luxury Pedicure</span> <span className="font-bold text-brand-pink">₹1,200</span></li>
                <li className="flex justify-between"><span>Manicure Care</span> <span className="font-bold text-brand-pink">₹800</span></li>
              </ul>
            </div>
            <a href="#booking" className="block text-center bg-brand-pink-light hover:bg-brand-pink text-brand-pink hover:text-white text-xs font-bold py-3 rounded-xl transition-all">
              BOOK NAIL SPA
            </a>
          </div>
        </div>
      </section>

      {/* WHATSAPP INTERACTIVE BOOKING WIDGET */}
      <section className="bg-brand-pink-light/30 py-20 px-4 border-y border-brand-pink-light" id="booking">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto ">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Direct Scheduling</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              Book Your Session Instantly
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed max-w-md mx-auto">
              Select your favorite packages below, fill in your dates, and send the request straight to our salon's WhatsApp.
            </p>
          </div>

          <div className="" style={{ transitionDelay: "150ms" }}>
            <WhatsAppBooking />
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16 ">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Client Love</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Words From Our Happy Brides
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-gold text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-brand-charcoal/70 italic leading-relaxed font-light">
                "Monica Ma'am ne meri wedding par jo HD bridal makeup kiya tha, wo subah tak bilkul flawless aur fresh dikh raha tha. Meri family aur friends sabne makeup ki tareef ki. Inka Kankarbagh studio bohot hi professional aur clean hai!"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-pink-light flex-shrink-0">
                <img src="/images/avatar_priya.png" alt="Priya Sharma" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-pink uppercase">Priya Sharma</p>
                <p className="text-[10px] text-brand-charcoal/40 uppercase mt-0.5">Patna Bride (2025)</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: "100ms" }}>
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-gold text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-brand-charcoal/70 italic leading-relaxed font-light">
                "Maine yahan se global hair color aur keratin treatment karwaya tha. Hair spa products aur care Patna me sabse best hain. Stylists bohot politely behave karte hain aur achha guidance dete hain."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-pink-light flex-shrink-0">
                <img src="/images/avatar_anjali.png" alt="Anjali Singh" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-pink uppercase">Anjali Singh</p>
                <p className="text-[10px] text-brand-charcoal/40 uppercase mt-0.5">Boring Road client</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-3xl border border-brand-pink-light shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: "200ms" }}>
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-gold text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-sm text-brand-charcoal/70 italic leading-relaxed font-light">
                "Monica's Lounge ki gel nail extensions bilkul magical hain. Price points bohot hi reasonable hain aur extensions 4 weeks tak perfect condition me rahe. I highly recommend Monica Sinha for party styling!"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-pink-light flex-shrink-0">
                <img src="/images/avatar_riya.png" alt="Riya Verma" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-pink uppercase">Riya Verma</p>
                <p className="text-[10px] text-brand-charcoal/40 uppercase mt-0.5">Kankarbagh Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className="bg-brand-charcoal text-white py-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-6 ">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Connect With Us</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">Contact Monica's Lounge</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light max-w-md">
              We look forward to helping you realize your perfect glamour transformation. Reach out to schedule bridal trials, parlor packages, or training inquiries.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-gold">Address</p>
                  <p className="text-sm text-white/70 mt-1 font-light">J-26, P.C. Colony Road, Kankarbagh, Lohia Nagar, Patna, Bihar - 800020</p>
                  <p className="text-xs text-white/40 italic mt-0.5">Near Shivajee Park Tempo Stand, opposite Chowdhury Medical Hall</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-gold">Phone Call / WhatsApp</p>
                  <a href="tel:+919576203418" className="text-sm text-brand-pink hover:text-white transition-colors block mt-1">+91 95762 03418</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-gold">Studio Hours</p>
                  <p className="text-sm text-white/70 mt-1 font-light">10:00 AM – 08:30 PM (Open all days)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Static Mock Location Map representation */}
          <div className="w-full flex justify-center " style={{ transitionDelay: "150ms" }}>
            <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 text-center space-y-6 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mx-auto text-lg">
                🗺️
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-bold">Kankarbagh Location</h4>
                <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                  Our salon is located in Lohia Nagar, facing P.C. Colony road. Easily accessible from Patna Junction.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <a
                  href="https://maps.google.com/?q=Monica's+Beauty+Lounge+Kankarbagh+Patna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold tracking-widest px-6 py-2.5 rounded-lg transition-colors"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-charcoal text-white/40 py-10 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h5 className="font-serif text-base font-bold text-white/90">Monica's Beauty Lounge</h5>
            <p className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold mt-0.5">Bridal Studio &amp; Academy</p>
            <p className="text-[11px] text-white/50 mt-1 font-light">© 2026 Monica's Lounge Kankarbagh Patna. All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-xs font-semibold tracking-wider uppercase text-white/70">
            <a href="#about" className="hover:text-brand-pink">Welcome</a>
            <a href="#services" className="hover:text-brand-pink">Services</a>
            <a href="#before-after" className="hover:text-brand-pink">Transformations</a>
            <a href="#booking" className="hover:text-brand-pink">Appointments</a>
          </div>
        </div>
      </footer>
    </>
  );
}
