
import React from 'react';

const WhatWeDo: React.FC = () => {
  const areas = [
    { title: "Maternal and child health", desc: "Providing essential healthcare services to the most vulnerable mothers and children.", icon: "🤱" },
    { title: "Nutrition and food security", desc: "Combating hunger and malnutrition through sustainable community-based solutions.", icon: "🍲" },
    { title: "Avoidable blindness", desc: "Focused on Trachoma elimination using the WHO SAFE strategy in endemic areas.", icon: "👁️" },
    { title: "Disease control", icon: "🛡️", desc: "Implementing strategies to prevent major public health problems and visual impairment." },
    { title: "Climate change and health", icon: "🌍", desc: "Mitigating the adverse effects of environmental shifts on community wellness." },
    { title: "Basic development activities", icon: "🏗️", desc: "Water supply, sanitation, and infrastructure essential for community health." }
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#1B3B5F] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">What We Do</h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              Collaborative public health and development projects to improve the health, wellbeing and overall quality of life of vulnerable Ethiopians.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{area.icon}</div>
                <h3 className="text-2xl font-black text-[#1B3B5F] mb-4 leading-tight group-hover:text-[#C5A07D]">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {area.desc}
                </p>
                <div className="mt-8 h-1 w-0 bg-[#C5A07D] group-hover:w-1/4 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#C5A07D] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-10 tracking-tighter">BRIDGING THE GAP</h2>
          <p className="text-xl lg:text-2xl font-bold italic opacity-90 leading-relaxed">
            "CHROTA aims to address the gap between wanting but being unable to be healthy, well and productive due to lack of integrated and sustainable responses to health and development needs."
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
