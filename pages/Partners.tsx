
import React from 'react';

const Partners: React.FC = () => {
  const tableData = [
    { activity: "Capacity Building & Technical Assistance", partners: "Ministry of Health Ethiopia, Eye Care & Neglected Tropical Diseases" },
    { activity: "Development of guidelines & Strategic Plans", partners: "The Fred Hollows Foundation, Cure Blindness" },
    { activity: "Quality Assessment & Improvement", partners: "Children Investment Fund Foundation" },
    { activity: "Trachoma Seroprevalence Survey", partners: "CDC USA, Task Force for Global Health" },
    { activity: "Clinical & Trichiasis Surgery Trials", partners: "Harvard University, University of Pennsylvania, LSHTM" }
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#1B3B5F] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">Partners</h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              Collaborating with national and international organizations to maximize expertise, resources, and ensure sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-black text-[#1B3B5F] mb-12 tracking-tight">Key activities and collaborators</h2>
          
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
            <table className="w-full text-left bg-white">
              <thead>
                <tr className="bg-[#1B3B5F] text-[#C5A07D] uppercase text-xs font-black tracking-[0.2em]">
                  <th className="px-10 py-6">Key Activities</th>
                  <th className="px-10 py-6">Partners or Collaborators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-10 py-8 font-black text-[#1B3B5F] text-lg lg:text-xl group-hover:text-[#C5A07D] transition-colors">
                      {row.activity}
                    </td>
                    <td className="px-10 py-8 text-gray-600 font-bold leading-relaxed">
                      {row.partners}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 w-32 h-32 bg-[#1B3B5F] rounded-full flex items-center justify-center p-6">
               <span className="text-white text-4xl font-black">B</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#1B3B5F] mb-4 uppercase tracking-tighter">Primary Partner</h3>
              <p className="text-lg text-gray-600 font-bold leading-relaxed">
                Berhan Public Health & Eye Care Consultancy PLC. A private limited company focused on implementation of sustainable health interventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
