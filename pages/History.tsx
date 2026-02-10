
import React from 'react';

const History: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#1B3B5F] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">Our History</h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              Over two decades of experience in health research leading to the establishment of CHROTA as a nonprofit dedicated to community needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="prose prose-xl prose-slate max-w-none text-[#1B3B5F]">
            <h2 className="text-4xl font-black mb-8 tracking-tight">Origins</h2>
            <p className="text-xl leading-relaxed mb-10">
              CHROTA was established by the founders of <strong>Berhan Public Health & Eye Care Consultancy</strong>. 
              The decision came after recognizing that achieving sustainable economic development requires successfully preventing and mitigating disease among many other structural requirements.
            </p>

            <div className="my-16 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-black text-[#C5A07D] uppercase mb-4">The Vision</h3>
                <p className="text-gray-600 font-bold leading-relaxed">
                  Focusing on the implementation of sustainable interventions to improve health and visual impairment.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-black text-[#C5A07D] uppercase mb-4">The Catalyst</h3>
                <p className="text-gray-600 font-bold leading-relaxed">
                  Responding to the lack of basic needs that continually puts communities at risk of avoidable diseases.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 tracking-tight">The Case for Community Driven Development</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As of April 2024, Ethiopia continued to account for the world’s largest burden of trachoma, with <strong>61 million people</strong> living in endemic areas.
              While improvements have been made using the SAFE strategy, root causes—like lack of productive skills and infrastructure—remain a survival challenge.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-[#C5A07D] pl-6 font-medium">
              "CHROTA aims to address the integrated and sustainable responses needed to transform Ethiopia from beneficiaries to active owners."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
