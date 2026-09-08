import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ChevronRight, Star } from 'lucide-react';

const NairobiEldoret = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/routes', { state: { origin: 'Nairobi', destination: 'Eldoret' } });
  };

  const faqs = [
    {
      q: 'How long is the Nairobi to Eldoret bus journey?',
      a: 'The journey takes approximately 5–6 hours via the Nairobi–Nakuru–Eldoret highway, passing through the Rift Valley scenic highlands.',
    },
    {
      q: 'What is the price of a Nairobi to Eldoret bus ticket?',
      a: 'SimbaCoach tickets from Nairobi to Eldoret start from KES 1,000 for standard, KES 1,300 for executive and KES 1,500 for VIP seats.',
    },
    {
      q: 'What time does the Nairobi to Eldoret bus depart?',
      a: 'We operate daily departures at 8:00 AM, 11:00 AM, 4:00 PM, 8:00 PM and 10:00 PM from our Duruma Road terminal in Nairobi.',
    },
    {
      q: 'Where does the bus drop off in Eldoret?',
      a: 'Buses arrive at the SimbaCoach Eldoret terminal near the town centre, the agricultural and manufacturing hub of the North Rift.',
    },
    {
      q: 'Can I book a Nairobi to Eldoret ticket online?',
      a: 'Yes. Book your seat on this website by selecting your date and seat class, then pay via M-Pesa or card for instant confirmation.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Nairobi to Eldoret Bus | Daily Departures from KES 1,000 | Book Online - SimbaCoach</title>
        <meta name="description" content="Book Nairobi to Eldoret bus tickets online with SimbaCoach. Daily departures to the North Rift from KES 1,000. Air-conditioned coaches with instant M-Pesa confirmation." />
        <meta name="keywords" content="Nairobi to Eldoret bus, Nairobi Eldoret bus price, bus from Nairobi to Eldoret, Eldoret bus booking, SimbaCoach Nairobi Eldoret, Rift Valley bus" />
        <link rel="canonical" href="https://simba-coach-bus.online/routes/nairobi-eldoret" />
        <meta property="og:title" content="Nairobi to Eldoret Bus | Daily Departures from KES 1,000 | SimbaCoach" />
        <meta property="og:description" content="Book Nairobi to Eldoret bus tickets online. Daily departures from KES 1,000. Comfortable coaches to the North Rift." />
        <meta property="og:url" content="https://simba-coach-bus.online/routes/nairobi-eldoret" />
        <meta property="og:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SimbaCoach" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SimbaCoach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nairobi to Eldoret Bus | Daily Departures from KES 1,000 | SimbaCoach" />
        <meta name="twitter:description" content="Book Nairobi to Eldoret bus tickets online. Daily departures from KES 1,000. Safe and comfortable coaches." />
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
          "name": "Nairobi to Eldoret Bus",
          "provider": { "@type": "Organization", "name": "SimbaCoach Bus", "url": "https://simba-coach-bus.online" },
          "departureBusStop": { "@type": "BusStop", "name": "Nairobi Terminal, Duruma Road", "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" } },
          "arrivalBusStop": { "@type": "BusStop", "name": "Eldoret Terminal", "address": { "@type": "PostalAddress", "addressLocality": "Eldoret", "addressCountry": "KE" } },
          "departureTime": "08:00",
          "offers": { "@type": "Offer", "price": "1000", "priceCurrency": "KES", "availability": "https://schema.org/InStock" }
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
            <span className="text-white">Nairobi → Eldoret</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nairobi to Eldoret Bus</h1>
          <p className="text-xl text-blue-200 max-w-2xl">Daily direct buses from Nairobi to Eldoret, the vibrant city of the North Rift Valley, from KES 1,000.</p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" /><span>~5–6 hours</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /><span>Duruma Rd, Nairobi → Eldoret town centre</span></div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-orange-400 fill-orange-400" /><span>4.8/5 rated route</span></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Booking CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Starting from</p>
            <p className="text-4xl font-extrabold text-[#1E3A8A]">KES 1,000</p>
            <p className="text-orange-600 font-semibold text-sm mt-1">Executive: KES 1,300 · VIP: KES 1,500</p>
          </div>
          <button onClick={handleBookNow} className="px-10 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-400/40 transition-all text-lg">
            Book Your Seat Now
          </button>
        </div>

        {/* Route Details */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Route</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Nairobi to Eldoret bus</strong> serves the North Rift Valley, a region known for agriculture, dairy farming and a growing industrial base anchored in Eldoret's food processing and textiles sectors. The route follows the Nakuru–Eldoret highway through the scenic highlands around Timboroa.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Eldoret also connects to Kitale and the border towns of Busia and Malaba, making this a key stop for onward travel to Uganda and South Sudan. All coaches are air-conditioned with reclining seats, USB charging and onboard entertainment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'First Departure', value: '8:00 AM' },
              { label: 'Duration', value: '5–6 Hours' },
              { label: 'Standard', value: 'KES 1,000' },
              { label: 'VIP', value: 'KES 1,500' },
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
              { label: 'Nairobi → Kitale', to: '/routes' },
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

export default NairobiEldoret;