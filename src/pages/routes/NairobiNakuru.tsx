import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ChevronRight, Star } from 'lucide-react';

const NairobiNakuru = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/routes', { state: { origin: 'Nairobi', destination: 'Nakuru' } });
  };

  const faqs = [
    {
      q: 'How long is the Nairobi to Nakuru bus journey?',
      a: 'The journey takes approximately 3 hours via the Nairobi–Nakuru highway, one of the fastest and smoothest bus routes in Kenya.',
    },
    {
      q: 'What is the price of a Nairobi to Nakuru bus ticket?',
      a: 'SimbaCoach tickets from Nairobi to Nakuru start from KES 600 for standard, KES 800 for executive and KES 1,000 for VIP seats.',
    },
    {
      q: 'What time does the Nairobi to Nakuru bus depart?',
      a: 'We operate multiple daily departures from our Duruma Road terminal in Nairobi, with the first bus leaving at 8:00 AM.',
    },
    {
      q: 'Where does the bus drop off in Nakuru?',
      a: 'Buses arrive at the SimbaCoach Nakuru terminal near the town centre, close to hotels and the Nakuru CBD.',
    },
    {
      q: 'Can I book a Nairobi to Nakuru ticket online?',
      a: 'Yes. Book your seat on this website by selecting your date and seat class, then pay via M-Pesa or card for instant confirmation.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Nairobi to Nakuru Bus | Daily Departures from KES 600 | Book Online - SimbaCoach</title>
        <meta name="description" content="Book Nairobi to Nakuru bus tickets online with SimbaCoach. Frequent daily departures in about 3 hours from KES 600. Instant M-Pesa confirmation." />
        <meta name="keywords" content="Nairobi to Nakuru bus, Nairobi Nakuru bus price, bus from Nairobi to Nakuru, Nakuru bus fare, SimbaCoach Nairobi Nakuru, Rift Valley bus" />
        <link rel="canonical" href="https://simba-coach-bus.online/routes/nairobi-nakuru" />
        <meta property="og:title" content="Nairobi to Nakuru Bus | Daily Departures from KES 600 | SimbaCoach" />
        <meta property="og:description" content="Book Nairobi to Nakuru bus tickets online. Frequent departures in about 3 hours from KES 600." />
        <meta property="og:url" content="https://simba-coach-bus.online/routes/nairobi-nakuru" />
        <meta property="og:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SimbaCoach" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SimbaCoach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nairobi to Nakuru Bus | Daily Departures from KES 600 | SimbaCoach" />
        <meta name="twitter:description" content="Book Nairobi to Nakuru bus tickets online. Frequent departures in about 3 hours from KES 600." />
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
          "name": "Nairobi to Nakuru Bus",
          "provider": { "@type": "Organization", "name": "SimbaCoach Bus", "url": "https://simba-coach-bus.online" },
          "departureBusStop": { "@type": "BusStop", "name": "Nairobi Terminal, Duruma Road", "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" } },
          "arrivalBusStop": { "@type": "BusStop", "name": "Nakuru Terminal", "address": { "@type": "PostalAddress", "addressLocality": "Nakuru", "addressCountry": "KE" } },
          "departureTime": "08:00",
          "offers": { "@type": "Offer", "price": "600", "priceCurrency": "KES", "availability": "https://schema.org/InStock" }
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
            <span className="text-white">Nairobi → Nakuru</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nairobi to Nakuru Bus</h1>
          <p className="text-xl text-blue-200 max-w-2xl">Frequent daily buses between Nairobi and Nakuru in about 3 hours, from KES 600.</p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" /><span>~3 hours</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /><span>Duruma Rd, Nairobi → Nakuru town centre</span></div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /><span>2,000+ passengers monthly</span></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Booking CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Starting from</p>
            <p className="text-4xl font-extrabold text-[#1E3A8A]">KES 600</p>
            <p className="text-orange-600 font-semibold text-sm mt-1">Executive: KES 800 · VIP: KES 1,000</p>
          </div>
          <button onClick={handleBookNow} className="px-10 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-400/40 transition-all text-lg">
            Book Your Seat Now
          </button>
        </div>

        {/* Route Details */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Route</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Nairobi to Nakuru bus</strong> is one of the most frequent intercity services in the Rift Valley. Nakuru is a bustling commercial and administrative hub, and the gateway to Lake Nakuru National Park and the flamingos, making the route equally popular with commuters and visitors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Thanks to the modern Nairobi–Nakuru highway, the ride takes about three hours with smooth tarmac for the entire journey. Our coaches include standard, executive and VIP seating with air conditioning and USB charging.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'First Departure', value: '8:00 AM' },
              { label: 'Duration', value: '3 Hours' },
              { label: 'Standard', value: 'KES 600' },
              { label: 'VIP', value: 'KES 1,000' },
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
              { label: 'Nairobi → Eldoret', to: '/routes/nairobi-eldoret' },
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

export default NairobiNakuru;