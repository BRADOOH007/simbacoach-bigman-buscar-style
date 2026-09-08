import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ChevronRight, Star } from 'lucide-react';

const NairobiKisumu = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/routes', { state: { origin: 'Nairobi', destination: 'Kisumu' } });
  };

  const faqs = [
    {
      q: 'How long is the Nairobi to Kisumu bus journey?',
      a: 'The journey takes approximately 6–7 hours via the Nairobi–Nakuru–Kericho highway, with rest stops along the way.',
    },
    {
      q: 'What is the price of a Nairobi to Kisumu bus ticket?',
      a: 'SimbaCoach tickets from Nairobi to Kisumu start from KES 1,200 for standard, KES 1,500 for executive and KES 1,800 for VIP seats.',
    },
    {
      q: 'What time does the Nairobi to Kisumu bus depart?',
      a: 'We operate daily departures at 8:00 AM, 11:00 AM, 4:00 PM, 8:00 PM and 10:00 PM from our Duruma Road terminal in Nairobi.',
    },
    {
      q: 'Where does the bus drop off in Kisumu?',
      a: 'Buses arrive at the SimbaCoach Kisumu terminal, centrally located near the city centre with easy access to hotels and Lake Victoria attractions.',
    },
    {
      q: 'Can I book a Nairobi to Kisumu ticket online?',
      a: 'Yes. Book your seat on this website by selecting your date and seat class, then pay via M-Pesa or card for instant confirmation.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Nairobi to Kisumu Bus | Daily Departures from KES 1,200 | Book Online - SimbaCoach</title>
        <meta name="description" content="Book Nairobi to Kisumu bus tickets online with SimbaCoach. Daily departures to Lake Victoria from KES 1,200. Air-conditioned coaches with instant M-Pesa confirmation." />
        <meta name="keywords" content="Nairobi to Kisumu bus, Nairobi Kisumu bus fare, bus from Nairobi to Kisumu, Kisumu bus price, SimbaCoach Nairobi Kisumu, western Kenya bus" />
        <link rel="canonical" href="https://simba-coach-bus.online/routes/nairobi-kisumu" />
        <meta property="og:title" content="Nairobi to Kisumu Bus | Daily Departures from KES 1,200 | SimbaCoach" />
        <meta property="og:description" content="Book Nairobi to Kisumu bus tickets online. Daily departures from KES 1,200. Comfortable coaches to Lake Victoria." />
        <meta property="og:url" content="https://simba-coach-bus.online/routes/nairobi-kisumu" />
        <meta property="og:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SimbaCoach" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SimbaCoach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nairobi to Kisumu Bus | Daily Departures from KES 1,200 | SimbaCoach" />
        <meta name="twitter:description" content="Book Nairobi to Kisumu bus tickets online. Daily departures from KES 1,200. Safe and comfortable coaches." />
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
          "name": "Nairobi to Kisumu Bus",
          "provider": { "@type": "Organization", "name": "SimbaCoach Bus", "url": "https://simba-coach-bus.online" },
          "departureBusStop": { "@type": "BusStop", "name": "Nairobi Terminal, Duruma Road", "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" } },
          "arrivalBusStop": { "@type": "BusStop", "name": "Kisumu Terminal", "address": { "@type": "PostalAddress", "addressLocality": "Kisumu", "addressCountry": "KE" } },
          "departureTime": "08:00",
          "offers": { "@type": "Offer", "price": "1200", "priceCurrency": "KES", "availability": "https://schema.org/InStock" }
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
            <span className="text-white">Nairobi → Kisumu</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nairobi to Kisumu Bus</h1>
          <p className="text-xl text-blue-200 max-w-2xl">Daily direct buses from Nairobi to Kisumu, the lakeside city of western Kenya, from KES 1,200.</p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" /><span>~6–7 hours</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /><span>Duruma Rd, Nairobi → Kisumu city centre</span></div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /><span>4.8/5 rated route</span></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Booking CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Starting from</p>
            <p className="text-4xl font-extrabold text-[#1E3A8A]">KES 1,200</p>
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
            The <strong>Nairobi to Kisumu bus</strong> connects Kenya's capital with the country's third-largest city on the shores of Lake Victoria. Since the route follows the upgraded Nairobi–Nakuru–Kericho highway, travel times have shortened considerably and the ride is smooth and scenic through the tea and sugarcane zones of the Rift Valley.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kisumu is a gateway to western Kenya and the Lake Victoria region, making this a popular route for students, business travellers and families. All coaches are air-conditioned with reclining seats and USB charging ports.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'First Departure', value: '8:00 AM' },
              { label: 'Duration', value: '6–7 Hours' },
              { label: 'Standard', value: 'KES 1,200' },
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
              { label: 'Nairobi → Mombasa', to: '/routes/nairobi-mombasa' },
              { label: 'Kisumu → Kampala', to: '/routes/nairobi-kampala' },
              { label: 'Nairobi → Kampala', to: '/routes/nairobi-kampala' },
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

export default NairobiKisumu;