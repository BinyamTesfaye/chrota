
import React from 'react';

const WhoWeAre: React.FC = () => {
  const values = [
    "Inclusiveness", "Transparency", "Excellence", "Accountability", "Integrity", "Compassion", "Respect"
  ];
  const principles = [
    "Community leadership and ownership",
    "Public/Private Partnership and Collaboration",
    "Integrated development",
    "Sustainability",
    "Women’s empowerment and Equity"
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1B3B5F] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">Who We Are</h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              A local non-governmental organization established to develop healthy communities by addressing public health and development needs in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="prose prose-xl prose-slate max-w-none text-[#1B3B5F]">
            <h2 className="text-4xl font-black mb-8 tracking-tight">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-12">
              CHROTA is registered in Addis Ababa as a sister non-governmental organization to <strong>Berhan Public Health & Eye Care Consultancy PLC</strong>. 
              Our members are seasoned professionals and experts on public health, disease control, eye care, trachoma, water supply and sanitation, disaster assistance, and sustainable development.
            </p>

            <div className="bg-[#C5A07D] rounded-3xl p-10 lg:p-16 text-white mb-16 shadow-xl shadow-[#C5A07D]/20">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">What CHROTA means</h3>
              <p className="text-2xl font-bold italic leading-relaxed">
                "It is an Ethiopian word meaning <strong>beneficence</strong>. CHROTA aims to engage in its projects with the intention of doing and producing a state of wellness for vulnerable communities across Ethiopia."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-[#C5A07D]">Our Values</h3>
                <ul className="space-y-4">
                  {values.map(val => (
                    <li key={val} className="flex items-center gap-4 text-xl font-bold border-b border-gray-100 pb-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A07D]"></span>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-[#C5A07D]">Our Principles</h3>
                <ul className="space-y-4">
                  {principles.map(princ => (
                    <li key={princ} className="flex items-start gap-4 text-lg font-bold">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#1B3B5F]"></span>
                      {princ}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
