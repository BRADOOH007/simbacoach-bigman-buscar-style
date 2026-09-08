import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ChevronRight, Star } from 'lucide-react';

const NairobiMombasa = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/routes', { state: { origin: 'Nairobi', destination: 'Mombasa' } });
  };

  const faqs = [
    {
      q: 'How long is the Nairobi to Mombasa bus journey?',
      a: 'The Nairobi to Mombasa bus takes approximately 9–11 hours via the Mombasa–Nairobi Expressway and the Nairobi–Mombasa Highway (A109), with scheduled rest stops.',
    },
    {
      q: 'What is the price of a Nairobi to Mombasa bus ticket?',
      a: 'SimbaCoach tickets from Nairobi to Mombasa start from KES 1,300 for standard, KES 1,500 for executive and KES 1,800 for VIP seats.',
    },
    {
      q: 'What time does the Nairobi to Mombasa bus depart?',
      a: 'We operate daily departures at 8:00 AM, 11:00 AM, 4:00 PM, 8:00 PM and 10:00 PM from our Duruma Road terminal in Nairobi.',
    },
    {
      q: 'Where does the bus drop off in Mombasa?',
      a: 'Buses arrive at the SimbaCoach Mombasa terminal near the city centre, with convenient connections to Diani, Ukunda, Malindi and the coastal beaches.',
    },
    {
      q: 'Can I book a Nairobi to Mombasa ticket online?',
      a: 'Yes. Book your seat on this website by selecting your date and seat class, then pay via M-Pesa or card for instant confirmation.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Nairobi to Mombasa Bus | Daily Departures from KES 1,300 | Book Online - SimbaCoach</title>
        <meta name="description" content="Book Nairobi to Mombasa bus tickets online with SimbaCoach. Daily departures, air-conditioned coaches from KES 1,300. Instant M-Pesa confirmation." />
        <meta name="keywords" content="Nairobi to Mombasa bus, Nairobi Mombasa bus price, bus from Nairobi to Mombasa, Mombasa bus ticket price, SimbaCoach Nairobi Mombasa, Kenya coast bus" />
        <link rel="canonical" href="https://simba-coach-bus.online/routes/nairobi-mombasa" />
        <meta property="og:title" content="Nairobi to Mombasa Bus | Daily Departures from KES 1,300 | SimbaCoach" />
        <meta property="og:description" content="Book Nairobi to Mombasa bus tickets online. Daily departures from KES 1,300. Safe, air-conditioned coaches to the Kenyan coast." />
        <meta property="og:url" content="https://simba-coach-bus.online/routes/nairobi-mombasa" />
        <meta property="og:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SimbaCoach" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SimbaCoach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nairobi to Mombasa Bus | Daily Departures from KES 1,300 | SimbaCoach" />
        <meta name="twitter:description" content="Book Nairobi to Mombasa bus tickets online. Daily departures from KES 1,300. Safe, comfortable coaches to the coast." />
        <meta name="twitter:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BusTrip",
          "name": "Nairobi to Mombasa Bus",
          "provider": { "@type": "Organization", "name": "SimbaCoach Bus", "url": "https://simba-coach-bus.online" },
          "departureBusStop": { "@type": "BusStop", "name": "Nairobi Terminal, Duruma Road", "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" } },
          "arrivalBusStop": { "@type": "BusStop", "name": "Mombasa Terminal", "address": { "@type": "PostalAddress", "addressLocality": "Mombasa", "addressCountry": "KE" } },
          "departureTime": "08:00",
          "offers": { "@type": "Offer", "price": "1300", "priceCurrency": "KES", "availability": "https://schema.org/InStock" }
        })}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-[#1E3A8A] py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-blue-300 mb-4 flex items-center gap-1">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/routes" className="hover:text-white">Routes</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Nairobi → Mombasa</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nairobi to Mombasa Bus</h1>
          <p className="text-xl text-blue-200 max-w-2xl">Kenya's most travelled intercity bus route. Daily departures from Nairobi to the coast at prices from KES 1,300.</p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" /><span>~9–11 hours</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /><span>Duruma Rd, Nairobi → Mombasa city centre</span></div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /><span>4.9/5 rated route</span></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Booking CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Starting from</p>
            <p className="text-4xl font-extrabold text-[#1E3A8A]">KES 1,300</p>
            <p className="text-orange-600 font-semibold text-sm mt-1">Executive: KES 1,500 · VIP: KES 1,800</p>
          </div>
          <button onClick={handleBookNow} className="px-10 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-400/40 transition-all text-lg">
            Book Your Seat Now
          </button>
        </div>

        {/* Route Details */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Route</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Nairobi to Mombasa bus</strong> is SimbaCoach's flagship domestic route and one of the busiest bus services in East Africa. Departing daily from our Duruma Road terminal, the journey follows the Nairobi–Mombasa Highway through Tsavo West and Tsavo East before reaching the coastal city.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Coaches on this route are air-conditioned with reclining seats, USB charging ports and onboard entertainment. The route is popular with holidaymakers heading to Diani, Ukunda, Watamu and Malindi, as well as commuters and business travellers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'First Departure', value: '8:00 AM' },
              { label: 'Duration', value: '9–11 Hours' },
              { label: 'Standard', value: 'KES 1,300' },
              { label: 'VIP', value: 'KES 1,800' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{item.label}</p>
                <p className="font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Routes */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Nairobi → Kisumu', to: '/routes/nairobi-kisumu' },
              { label: 'Nairobi → Nakuru', to: '/routes/nairobi-nakuru' },
              { label: 'Nairobi → Eldoret', to: '/routes/nairobi-eldoret' },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#1E3A8A] hover:bg-blue-50 transition-all group">
                <span className="font-semibold text-gray-700 group-hover:text-[#1E3A8A]">{r.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E3A8A]" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NairobiMombasa;