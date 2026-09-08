import React, { useEffect, useMemo } from 'react';
import { Clock, Search, Calendar, Bus } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import BookingModal from '../components/booking/BookingModal';
import ReturnTripModal from '../components/booking/ReturnTripModal';
import { useAdmin } from '../context/AdminContext';
import { simbaRoutes } from '../data/simbaRoutes';

const RoutesPage = () => {
  const { routes } = useAdmin();
  const [selectedRoute, setSelectedRoute] = React.useState<typeof routes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const location = useLocation();
  const [filteredRoutes, setFilteredRoutes] = React.useState<typeof routes>([]);
  const [searchParams, setSearchParams] = React.useState<{origin?: string, destination?: string, date?: string} | null>(null);
  
  const [isReturnModalOpen, setIsReturnModalOpen] = React.useState(false);
  const [outboundBooking, setOutboundBooking] = React.useState<{
    origin: string;
    destination: string;
    date: string;
    price: string;
  } | null>(null);
  const [returnRoute, setReturnRoute] = React.useState<typeof routes[0] | null>(null);

  const capitalizeCityName = (city: string) => {
    if (!city) return '';
    return city
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Static fare data rendered in HTML for search engines (independent of async state)
  const staticRoutes = useMemo(() => simbaRoutes, []);

  const seoFaqs = [
    {
      q: 'How much is a Nairobi to Mombasa bus ticket?',
      a: 'A SimbaCoach Nairobi to Mombasa bus ticket starts from KES 1,300. The journey takes about 9–11 hours with multiple daily departures.',
    },
    {
      q: 'How much is a Nairobi to Kampala bus ticket?',
      a: 'A SimbaCoach Nairobi to Kampala bus ticket starts from KES 3,500 for standard class and KES 4,500 for VIP. The journey takes about 12 hours.',
    },
    {
      q: 'How much is a Nairobi to Kisumu bus ticket?',
      a: 'A SimbaCoach Nairobi to Kisumu bus ticket starts from KES 1,200 for standard, KES 1,500 for executive and KES 1,800 for VIP. The journey takes about 6–7 hours.',
    },
    {
      q: 'How much is a Nairobi to Kigali bus ticket?',
      a: 'A SimbaCoach Nairobi to Kigali bus ticket starts from KES 6,000 for standard, KES 6,500 for executive and KES 7,000 for VIP. The journey takes about 18–20 hours.',
    },
    {
      q: 'How much is a Nairobi to Juba bus ticket?',
      a: 'A SimbaCoach Nairobi to Juba bus ticket starts from KES 7,000 for standard, KES 7,500 for executive and KES 8,000 for VIP. The journey takes about 18–20 hours.',
    },
    {
      q: 'How much is a Nairobi to Eldoret bus ticket?',
      a: 'A SimbaCoach Nairobi to Eldoret bus ticket starts from KES 1,000 for standard, KES 1,300 for executive and KES 1,500 for VIP. The journey takes about 5–6 hours.',
    },
    {
      q: 'What payment methods does SimbaCoach accept?',
      a: 'SimbaCoach accepts M-Pesa, Airtel Money, and card payments. Your ticket is confirmed instantly after payment.',
    },
  ];

  useEffect(() => {
    if (routes.length > 0) {
      setFilteredRoutes(routes);
    }
  }, [routes]);

  useEffect(() => {
    if (routes.length === 0) return;
    
    if (location.state && location.state.routeId) {
      const routeId = location.state.routeId;
      const routeToSelect = routes.find(r => r.id === routeId);
      if (routeToSelect) {
        setSelectedRoute(routeToSelect);
        setIsModalOpen(true);
      }
    }

    if (location.state && (location.state.origin || location.state.destination)) {
      const { origin, destination, date } = location.state;
      setSearchParams({ origin, destination, date });
      
      const filtered = routes.filter(route => {
        const originMatch = origin ? 
          route.origin.toLowerCase().includes(origin.toLowerCase()) ||
          origin.toLowerCase().includes(route.origin.toLowerCase()) : true;
        const destMatch = destination ? 
          route.destination.toLowerCase().includes(destination.toLowerCase()) ||
          destination.toLowerCase().includes(route.destination.toLowerCase()) : true;
        return originMatch && destMatch;
      });
      
      if (filtered.length === 0 && origin) {
        const originRoutes = routes.filter(route => 
          route.origin.toLowerCase().includes(origin.toLowerCase()) ||
          origin.toLowerCase().includes(route.origin.toLowerCase())
        );
        setFilteredRoutes(originRoutes.length > 0 ? originRoutes : routes);
      } else {
        setFilteredRoutes(filtered.length > 0 ? filtered : routes);
      }
    } else if (!searchParams) {
      setFilteredRoutes(routes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, routes]);

  const handleClearSearch = () => {
    setFilteredRoutes(routes);
    setSearchParams(null);
    window.history.replaceState({}, document.title);
  };

  const handleBookClick = (route: typeof routes[0]) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };

  const selectedDate = searchParams?.date || new Date().toISOString().split('T')[0];

  const handleBookingComplete = (bookingDetails: { origin: string; destination: string; date: string; price: string }) => {
    setOutboundBooking(bookingDetails);
    
    const reverseRoute = routes.find(
      r => r.origin === bookingDetails.destination && r.destination === bookingDetails.origin
    );
    
    if (reverseRoute) {
      setReturnRoute(reverseRoute);
      setIsReturnModalOpen(true);
    }
  };

  const handleBookReturn = () => {
    setIsReturnModalOpen(false);
    if (returnRoute) {
      setSelectedRoute(returnRoute);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Seo
        title="Bus Routes & Fares - Kenya & East Africa | SimbaCoach"
        description="Explore SimbaCoach bus routes and fares across Kenya and East Africa. Daily departures from Nairobi, Mombasa, Eldoret, Kisumu to Kampala, Kigali & more. Book online with instant confirmation."
        path="/routes"
        keywords="SimbaCoach routes, bus fares Kenya, Kenya bus routes, Nairobi to Mombasa bus price, East Africa bus routes, book bus online"
        jsonLd={[{
          "@type": "FAQPage",
          "mainEntity": seoFaqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="title-display mb-4">Our Routes</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Connecting major cities across East Africa
          </p>
        </div>
      </section>

      {/* SEO: Full fare table (always rendered in HTML for search engines) */}
      <section className="container-wide py-10" aria-label="Bus routes and fares">
        <div className="bg-white rounded-2xl shadow-elevation-1 p-6 md:p-10 border border-slate-100">
          <h2 className="title-section text-slate-900 mb-2">SimbaCoach Bus Routes &amp; Fares 2025</h2>
          <p className="text-slate-600 mb-8">
            Book bus tickets online from Nairobi, Mombasa, Kisumu, Eldoret, Nakuru and Kitale across Kenya, Uganda,
            Rwanda, Tanzania and South Sudan. Fares below are starting prices per person. All departures daily.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-primary-50 text-primary-800">
                  <th className="text-left p-3 font-bold rounded-l-xl">From</th>
                  <th className="text-left p-3 font-bold">To</th>
                  <th className="text-left p-3 font-bold">Standard</th>
                  <th className="text-left p-3 font-bold">Executive</th>
                  <th className="text-left p-3 font-bold">VIP</th>
                  <th className="text-left p-3 font-bold rounded-r-xl">Duration</th>
                </tr>
              </thead>
              <tbody>
                {staticRoutes.slice(0, 60).map((r) => (
                  <tr key={r.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">{r.origin}</td>
                    <td className="p-3 font-semibold text-slate-800">{r.destination}</td>
                    <td className="p-3 text-slate-600">{r.price}</td>
                    <td className="p-3 text-slate-600">{r.executive_price}</td>
                    <td className="p-3 text-slate-600">{r.vip_price}</td>
                    <td className="p-3 text-slate-600 whitespace-nowrap">{r.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Fares may vary based on travel date and season. Book online for instant confirmation — pay via M-Pesa,
            Airtel Money or card. For assistance call +254 752 254 198 or WhatsApp +254 752 254 198.
          </p>
        </div>
      </section>

      {searchParams && (
        <div className="container-wide py-6">
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-elevation-1 p-6 border border-slate-100">
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-slate-500" />
              <div className="text-sm">
                <span className="text-slate-500">Active filters:</span>
                <span className="font-bold text-primary-700 ml-2">
                  {searchParams.origin && `From ${capitalizeCityName(searchParams.origin)}`} 
                  {searchParams.origin && searchParams.destination && ' → '}
                  {searchParams.destination && `To ${capitalizeCityName(searchParams.destination)}`}
                </span>
              </div>
            </div>
            <button 
              onClick={handleClearSearch}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Routes List */}
      <div className="container-wide pb-20">
        <div className="grid gap-6">
          {filteredRoutes.length === 0 ? (
            <div className="card-modern text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No routes found</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                We couldn't find any routes matching your criteria. Try clearing your filters.
              </p>
              <button 
                onClick={handleClearSearch}
                className="btn-primary"
              >
                View All Routes
              </button>
            </div>
          ) : (
            filteredRoutes.map((route) => (
              <div 
                key={route.id} 
                className="card-modern hover:shadow-elevation-3 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center p-6 md:p-8">
                  {/* Route info */}
                  <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">{route.origin}</h3>
                        <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">{route.country_origin}</p>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div className="flex gap-1">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-primary-200"></div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">{route.destination}</h3>
                        <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">{route.country_dest}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price & Book */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-center md:text-right">
                      <p className="text-sm text-slate-500">Starting from</p>
                      <p className="text-3xl font-extrabold text-primary-600">{route.price}</p>
                      {route.executive_price && (
                        <p className="text-xs text-secondary-600 font-bold mt-1">
                          Executive: {route.executive_price}
                        </p>
                      )}
                      {route.vip_price && (
                        <p className="text-xs text-secondary-600 font-bold mt-1">
                          VIP: {route.vip_price}
                        </p>
                      )}
                      <div className="flex items-center justify-center md:justify-end text-sm text-slate-500 gap-2 mt-2">
                        <Clock className="w-4 h-4" />
                        <span>{route.duration}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleBookClick(route)}
                      className="btn-primary w-full md:w-auto"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedRoute && (
        <BookingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          route={selectedRoute}
          selectedDate={selectedDate}
          onBookingComplete={handleBookingComplete}
        />
      )}

      {outboundBooking && returnRoute && (
        <ReturnTripModal
          isOpen={isReturnModalOpen}
          onClose={() => setIsReturnModalOpen(false)}
          onBookReturn={handleBookReturn}
          outboundRoute={outboundBooking}
          returnRoute={returnRoute}
        />
      )}
    </div>
  );
};

export default RoutesPage;
