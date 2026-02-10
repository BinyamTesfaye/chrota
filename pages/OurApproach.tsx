
import React from 'react';

const OurApproach: React.FC = () => {
  const strategies = [
    { title: "Responsibility", body: "We believe community members need to be empowered to take charge of their lives by being active participants of health and development projects." },
    { title: "Setting Priorities", body: "CHROTA project concept and design requires that community members themselves define needs and prioritize them." },
    { title: "Implementation/Ownership", body: "Community members serve as process owners with a goal of assuming total leadership and sustainability." },
    { title: "Technical Expertise", body: "CHROTA serves as a technical advisor in project design, monitoring, and facilitating partnerships." }
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#1B3B5F] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">Our Approach</h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              Community-based implementation models focused on participatory health and sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-black text-[#1B3B5F] mb-12 tracking-tight">The implementation model</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            CHROTA proposes a model based on lessons learned from Community Based Integrated Development Organization (CBISDO), 
            focusing on improving housing, sanitation, health, education, and employment simultaneously.
          </p>
          
          <div className="space-y-12">
            {strategies.map((s, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-6xl font-black text-[#C5A07D]/20 leading-none group-hover:text-[#C5A07D] transition-colors">0{i+1}</div>
                <div>
                  <h3 className="text-2xl font-black text-[#1B3B5F] mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-black text-[#1B3B5F] mb-8 uppercase tracking-tighter">Pilot Model Sites</h3>
              <ul className="space-y-6">
                {[
                  "Small Catchment: High Trachoma prevalence indicators.",
                  "Multi regional: Understanding cross-border contributing factors.",
                  "Community Owned and Led: Supporting movement from beneficiaries to owners.",
                  "Women and children focused: Targeting primary caretakers as key influencers."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-bold text-gray-700">
                    <span className="mt-1.5 w-3 h-3 rounded-full bg-[#C5A07D] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1B3B5F] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-black mb-6">Integrated Development</h3>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                Our principal practice focuses on addressing root cause developmental challenges associated with basic needs like water, electricity, sanitation, and housing.
              </p>
              <div className="h-1 w-20 bg-[#C5A07D]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
