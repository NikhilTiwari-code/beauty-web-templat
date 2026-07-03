"use client";

import { useState } from "react";

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

const SERVICES: ServiceItem[] = [
  // Bridal
  { id: "hd-bridal", name: "HD Bridal Makeup", price: 12000, category: "Bridal & Glamour" },
  { id: "airbrush-bridal", name: "Airbrush Bridal Makeup", price: 18000, category: "Bridal & Glamour" },
  { id: "engagement-mua", name: "Engagement Makeup", price: 6000, category: "Bridal & Glamour" },
  { id: "party-mua", name: "Party / Guest Makeup", price: 3000, category: "Bridal & Glamour" },
  // Hair
  { id: "haircut", name: "Premium Hair Cut & Styling", price: 800, category: "Hair Care & Styling" },
  { id: "hair-color", name: "Global Hair Color & Spa", price: 3500, category: "Hair Care & Styling" },
  { id: "keratin", name: "Keratin Smooth Treatment", price: 5000, category: "Hair Care & Styling" },
  // Skincare
  { id: "o3-facial", name: "O3+ Bridal Glow Facial", price: 2500, category: "Skincare & Facials" },
  { id: "hydrafacial", name: "Luxury HydraFacial Treatment", price: 4000, category: "Skincare & Facials" },
  // Nails
  { id: "nail-extensions", name: "Gel Nail Extensions & Art", price: 1500, category: "Nail Styling" },
  { id: "mani-pedi", name: "Luxury Manicure & Pedicure", price: 1200, category: "Nail Styling" },
];

const TIME_SLOTS = [
  "10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM"
];

export default function WhatsAppBooking() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleServiceToggle = (service: ServiceItem) => {
    const isAlreadySelected = selectedServices.some(item => item.id === service.id);
    if (isAlreadySelected) {
      setSelectedServices(selectedServices.filter(item => item.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateTotal = () => {
    return selectedServices.reduce((sum, item) => sum + item.price, 0);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    if (step === 2 && (!date || !timeSlot)) {
      alert("Please select a date and time slot.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    // Compile WhatsApp message
    const servicesText = selectedServices
      .map(item => `• ${item.name} (₹${item.price.toLocaleString("en-IN")})`)
      .join("\n");
    const totalVal = calculateTotal();

    const rawMessage = `Hello Monica's Beauty Lounge!

I would like to book a salon appointment:

👤 *Client Name:* ${name}
📞 *Phone Number:* ${phone}
📧 *Email:* ${email || "Not provided"}

💅 *Selected Services:*
${servicesText}

💰 *Total Estimated Price:* ₹${totalVal.toLocaleString("en-IN")}
📅 *Date:* ${date}
⏰ *Time Slot:* ${timeSlot}

Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919576203418?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setStep(4);
  };

  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-brand-pink-light overflow-hidden">
      {/* Header */}
      <div className="bg-brand-pink text-white px-8 py-8 text-center">
        <h3 className="font-serif text-2xl font-bold">Charges</h3>
        <p className="text-white/80 text-xs tracking-wider uppercase mt-1">Select services to view prices &amp; book via WhatsApp</p>
      </div>

      {/* Progress indicators */}
      <div className="flex bg-brand-pink-light border-b border-brand-pink/10">
        {[
          { num: 1, label: "Services" },
          { num: 2, label: "Schedule" },
          { num: 3, label: "Details" },
          { num: 4, label: "Confirm" }
        ].map((s) => (
          <div
            key={s.num}
            className={`flex-1 text-center py-3 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-colors ${
              step === s.num ? "border-brand-pink text-brand-pink" : "border-transparent text-brand-charcoal/40"
            }`}
          >
            {s.num}. {s.label}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="p-8 min-h-[380px] flex flex-col justify-between">
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Select one or more services:</h4>
            <div className="space-y-6 max-h-[280px] overflow-y-auto pr-2">
              {categories.map(cat => (
                <div key={cat} className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-brand-gold">{cat}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SERVICES.filter(s => s.category === cat).map(service => {
                      const isSelected = selectedServices.some(item => item.id === service.id);
                      return (
                        <div
                          key={service.id}
                          onClick={() => handleServiceToggle(service)}
                          className={`p-4 border rounded-xl cursor-pointer flex justify-between items-center transition-all ${
                            isSelected
                              ? "border-brand-pink bg-brand-pink-light/50 ring-1 ring-brand-pink"
                              : "border-brand-pink-light hover:border-brand-pink/40 bg-zinc-50"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <p className="text-sm font-semibold text-brand-charcoal">{service.name}</p>
                            <p className="text-xs text-brand-charcoal/40">{service.category}</p>
                          </div>
                          <span className="text-sm font-bold text-brand-pink">
                            ₹{service.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Choose date and time slot:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date Input */}
              <div className="md:col-span-1 space-y-2 flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="p-3 border border-brand-pink-light rounded-xl outline-none focus:border-brand-pink bg-zinc-50 text-sm"
                />
              </div>

              {/* Time Slots */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50">Select Time Slot</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3 border rounded-xl text-xs font-bold transition-all text-center ${
                        timeSlot === slot
                          ? "bg-brand-pink text-white border-brand-pink shadow-md"
                          : "border-brand-pink-light hover:border-brand-pink/40 bg-zinc-50 text-brand-charcoal/70"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleBookSubmit} className="space-y-6">
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Your details:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-brand-pink-light rounded-xl outline-none focus:border-brand-pink bg-zinc-50 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your 10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-brand-pink-light rounded-xl outline-none focus:border-brand-pink bg-zinc-50 text-sm"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-brand-pink-light rounded-xl outline-none focus:border-brand-pink bg-zinc-50 text-sm"
                />
              </div>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">WhatsApp Redirection!</h4>
              <p className="text-xs text-brand-charcoal/60 max-w-md mx-auto">
                We have compiled your booking request. Click below if you need to open WhatsApp again to send the message.
              </p>
            </div>

            <div className="bg-zinc-50 border border-brand-pink-light p-4 rounded-2xl max-w-md mx-auto text-left space-y-2">
              <p className="text-xs text-brand-charcoal/40 font-bold uppercase tracking-widest">Booking Summary:</p>
              <p className="text-sm font-semibold text-brand-charcoal">Name: {name}</p>
              <p className="text-sm font-semibold text-brand-charcoal">Date/Time: {date} @ {timeSlot}</p>
              <p className="text-sm font-semibold text-brand-pink">Total Estimated: ₹{calculateTotal().toLocaleString("en-IN")}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookSubmit}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
              >
                💬 Open WhatsApp Again
              </button>
            </div>
          </div>
        )}

        {/* Footer controls */}
        {step < 4 && (
          <div className="flex justify-between items-center border-t border-brand-pink-light pt-6 mt-8">
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-brand-charcoal/40 tracking-wider">Estimated Total</p>
              <p className="text-lg font-bold text-brand-pink">₹{calculateTotal().toLocaleString("en-IN")}</p>
            </div>

            <div className="flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2.5 border border-brand-pink-light text-brand-charcoal/70 hover:border-brand-pink text-xs font-bold tracking-widest rounded-xl transition-all"
                >
                  BACK
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2.5 bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold tracking-widest rounded-xl transition-all shadow-md"
                >
                  NEXT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleBookSubmit}
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold tracking-widest rounded-xl transition-all shadow-md flex items-center gap-1.5"
                >
                  💬 BOOK VIA WHATSAPP
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
