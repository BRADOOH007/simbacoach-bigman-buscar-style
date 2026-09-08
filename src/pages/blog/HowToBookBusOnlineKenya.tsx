import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';

const HowToBookBusOnlineKenya = () => {
  const publishDate = '2026-09-02';
  const modifiedDate = '2026-09-02';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Book Bus Tickets Online in Kenya: M-Pesa Payment Guide",
    "description": "A step-by-step guide to booking bus tickets online in Kenya and paying with M-Pesa. Valid for SimbaCoach and other intercity routes across the country.",
    "image": "https://simba-coach-bus.online/assets/simba-hero.webp",
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "author": { "@type": "Organization", "name": "SimbaCoach Bus" },
    "publisher": {
      "@type": "Organization",
      "name": "SimbaCoach Bus",
      "logo": { "@type": "ImageObject", "url": "https://simba-coach-bus.online/assets/logo.webp" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://simba-coach-bus.online/blog/how-to-book-bus-tickets-online-in-kenya" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can I pay for a bus ticket with M-Pesa online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Kenyan bus companies, including SimbaCoach, accept M-Pesa for online booking. You pay through an M-Pesa prompt or STK push and receive your ticket instantly." } },
      { "@type": "Question", "name": "How long does online bus ticket booking take in Kenya?", "acceptedAnswer": { "@type": "Answer", "text": "Booking a bus ticket online in Kenya takes less than three minutes from selecting your route to receiving the confirmation via SMS or email." } },
      { "@type": "Question", "name": "Is online bus booking safe in Kenya?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reputable operators issue instant, verifiable tickets and confirm payment immediately. Always book through the operator's official website to avoid scams." } },
      { "@type": "Question", "name": "What do I need to book a bus ticket online?", "acceptedAnswer": { "@type": "Answer", "text": "You need a working phone with M-Pesa or a bank card, the name as shown on your national ID or passport, and a valid travel date and route." } },
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>How to Book Bus Tickets Online in Kenya: M-Pesa Guide | SimbaCoach</title>
        <meta name="description" content="Step-by-step guide to booking bus tickets online in Kenya and paying with M-Pesa. Instant confirmation, safe payments and tips for a smooth booking." />
        <meta name="keywords" content="book bus online Kenya, M-Pesa bus ticket, how to book bus ticket online, M-Pesa payment bus, Kenyan bus booking online, SimbaCoach booking" />
        <link rel="canonical" href="https://simba-coach-bus.online/blog/how-to-book-bus-tickets-online-in-kenya" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Book Bus Tickets Online in Kenya: M-Pesa Guide" />
        <meta property="og:description" content="Book a bus ticket online in Kenya in under 3 minutes and pay with M-Pesa. A simple step-by-step guide." />
        <meta property="og:url" content="https://simba-coach-bus.online/blog/how-to-book-bus-tickets-online-in-kenya" />
        <meta property="og:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:site_name" content="SimbaCoach" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SimbaCoach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Book Bus Tickets Online in Kenya: M-Pesa Guide" />
        <meta name="twitter:description" content="Book a bus ticket online in Kenya in under 3 minutes and pay with M-Pesa. A simple step-by-step guide." />
        <meta name="twitter:image" content="https://simba-coach-bus.online/assets/simba-hero.webp" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-[#1E3A8A] py-16 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-blue-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Blog</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Booking & M-Pesa Guide</span>
          </nav>
          <div className="flex items-center gap-4 text-sm text-blue-300 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2, 2026</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> SimbaCoach Team</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">How to Book Bus Tickets Online in Kenya and Pay with M-Pesa</h1>
          <p className="text-xl text-blue-200">A practical, step-by-step guide for booking intercity bus tickets online in Kenya and paying with M-Pesa — no queues, no cash.</p>
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-lg max-w-none">

          <p className="text-gray-600 text-lg leading-relaxed">
            Booking a bus ticket online in Kenya used to mean awkward phone calls and long queues at the terminal. Today, most intercity operators — SimbaCoach included — let you reserve a seat in minutes and pay directly with <strong>M-Pesa</strong>. This guide walks you through the whole process so you can book with confidence on any route across the country.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Book Bus Tickets Online with M-Pesa?</h2>
          <p className="text-gray-600 leading-relaxed">
            Paying for a bus ticket with M-Pesa is fast, traceable and paperless. Your payment shows on your M-Pesa statement, the operator confirms instantly, and there is no risk of carrying large amounts of cash for a long trip. For frequent travellers on routes like <Link to="/routes/nairobi-mombasa" className="text-[#1E88E5] hover:underline">Nairobi to Mombasa</Link> or <Link to="/routes/nairobi-nakuru" className="text-[#1E88E5] hover:underline">Nairobi to Nakuru</Link>, online booking also means your seat is guaranteed even during peak seasons.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Need Before You Start</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
            <li>A phone registered for M-Pesa with enough balance, or a debit/credit card</li>
            <li>The traveller's name exactly as it appears on the national ID or passport</li>
            <li>Your preferred travel date and route (origin and destination)</li>
            <li>An active phone number to receive the M-Pesa confirmation and e-ticket</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step: Booking a Bus Ticket Online in Kenya</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 mt-4">
            <li><strong>Choose your route.</strong> Open the operator's website and pick your origin, destination and travel date. For example, Nairobi to Kisumu or Nairobi to Eldoret.</li>
            <li><strong>Select your seat class.</strong> Most coaches offer standard, executive and VIP seating with different prices and comfort levels.</li>
            <li><strong>Enter passenger details.</strong> Fill in the full names and ID numbers of each traveller exactly as they appear on official documents.</li>
            <li><strong>Choose M-Pesa at checkout.</strong> Select M-Pesa as your payment method and enter the M-Pesa number that will authorise the payment.</li>
            <li><strong>Approve the M-Pesa prompt.</strong> You will receive an STK push or a "pay bill" prompt on your phone. Enter your M-Pesa PIN to approve.</li>
            <li><strong>Receive your ticket.</strong> The operator confirms payment within seconds and sends your e-ticket by SMS and email. Show it at the terminal when boarding.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How M-Pesa Payment for Bus Tickets Works</h2>
          <p className="text-gray-600 leading-relaxed">
            When you pay a bus company online using M-Pesa, the money is transferred instantly to the operator's Paybill number. You confirm the transaction with your PIN and the operator's booking system verifies the payment automatically, then releases your ticket. Because the entire process is recorded on your M-Pesa statement, you always have proof of payment if you need assistance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you book with SimbaCoach, once the M-Pesa prompt is approved the booking is confirmed immediately and your seat is locked in — no follow-up calls needed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Booking Tickets for Popular Kenyan Routes</h2>
          <table className="w-full border-collapse text-sm my-6">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="p-3 text-left rounded-tl-lg">Route</th>
                <th className="p-3 text-left">Price from</th>
                <th className="p-3 text-left rounded-tr-lg">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-semibold text-gray-800"><Link to="/routes/nairobi-mombasa" className="text-[#1E88E5] hover:underline">Nairobi → Mombasa</Link></td>
                <td className="p-3 text-gray-700">KES 1,300</td>
                <td className="p-3 text-gray-600">9–11 hours</td>
              </tr>
              <tr className="bg-orange-50 border-b border-orange-100">
                <td className="p-3 font-semibold text-gray-800"><Link to="/routes/nairobi-kisumu" className="text-[#1E88E5] hover:underline">Nairobi → Kisumu</Link></td>
                <td className="p-3 text-gray-700">KES 1,200</td>
                <td className="p-3 text-gray-600">6–7 hours</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-semibold text-gray-800"><Link to="/routes/nairobi-nakuru" className="text-[#1E88E5] hover:underline">Nairobi → Nakuru</Link></td>
                <td className="p-3 text-gray-700">KES 600</td>
                <td className="p-3 text-gray-600">3 hours</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="p-3 font-semibold text-gray-800"><Link to="/routes/nairobi-eldoret" className="text-[#1E88E5] hover:underline">Nairobi → Eldoret</Link></td>
                <td className="p-3 text-gray-700">KES 1,000</td>
                <td className="p-3 text-gray-600">5–6 hours</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600 leading-relaxed">
            Fares are starting prices per person and may vary during peak travel periods such as public holidays. Booking early with M-Pesa locks in your seat before prices climb.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Safety Tips for Online Bus Booking in Kenya</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
            <li>Always book on the operator's official website. Scammers create fake booking pages that imitate well-known buses.</li>
            <li>Confirm the M-Pesa Paybill number against the one listed on the official site before approving payment.</li>
            <li>Keep the M-Pesa confirmation SMS until you have boarded — it is your proof of purchase.</li>
            <li>If the operator emails a receipt, check the sender's domain to confirm it matches the official business.</li>
            <li>Report any unexpected "prompt" amounts. Reputable companies list prices clearly before checkout.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What If My M-Pesa Payment Fails?</h2>
          <p className="text-gray-600 leading-relaxed">
            Network issues can occasionally delay an M-Pesa payment. If you are charged but do not receive a ticket within 10 minutes, contact the operator's customer support with your M-Pesa confirmation code. Availability can be limited, so our general rule is: <strong>only travel after you receive the official e-ticket</strong>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-4">
            {[
              { q: 'Can I pay for a bus ticket with M-Pesa online?', a: 'Yes. Most Kenyan bus companies, including SimbaCoach, accept M-Pesa for online booking with instant confirmation.' },
              { q: 'How long does online bus ticket booking take in Kenya?', a: 'Less than three minutes from selecting your route to receiving the e-ticket by SMS and email.' },
              { q: 'Is online bus booking safe in Kenya?', a: 'Yes, when you use the operator’s official website. Always verify the Paybill number and keep your M-Pesa confirmation.' },
              { q: 'What do I need to book a bus ticket online?', a: 'A phone with M-Pesa or a card, the traveller’s official name as on the ID or passport, and a valid travel date and route.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#1E3A8A] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Book Your Seat Online</h3>
            <p className="text-blue-200 mb-6">Browse routes and fares, then pay instantly with M-Pesa.</p>
            <Link to="/routes" className="inline-block px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-400/40 transition-all">
              View All Routes &amp; Fares
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowToBookBusOnlineKenya;