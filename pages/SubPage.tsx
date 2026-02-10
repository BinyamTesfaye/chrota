
import React from 'react';
import { PageView } from '../App';

interface SubPageProps {
  pageId: PageView;
  onNavigate: (page: PageView) => void;
}

const SubPage: React.FC<SubPageProps> = ({ pageId, onNavigate }) => {
  const contentMap: Record<string, { title: string; subtitle: string; body: React.ReactNode; image: string; parent: PageView }> = {
    'who-overview': {
      title: 'Organizational Overview',
      subtitle: 'Sister organization to Berhan Public Health & Eye Care Consultancy PLC.',
      parent: 'who-we-are',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920',
      body: (
        <div className="space-y-6">
          <p>CHROTA is a local non-governmental organization registered in Addis Ababa. Our team comprises seasoned professionals in public health, disease control, eye care, and sustainable development.</p>
          <p>As a sister organization to Berhan Public Health, we share a rich legacy of more than 20 years in research and clinical trials, focused on making Ethiopia a healthier nation.</p>
        </div>
      )
    },
    'who-values': {
      title: 'Our Core Values',
      subtitle: 'The moral compass guiding our health and development initiatives.',
      parent: 'who-we-are',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920',
      body: (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Inclusiveness", text: "Diverse voices driving common goals." },
            { name: "Transparency", text: "Open processes and resource management." },
            { name: "Excellence", text: "Striving for high-quality project implementation." },
            { name: "Accountability", text: "Full responsibility for community outcomes." },
            { name: "Integrity", text: "Ethical interactions at every level." },
            { name: "Compassion", text: "Empathy for vulnerable populations." }
          ].map(v => (
            <div key={v.name} className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-black text-[#1B3B5F] mb-2 uppercase text-sm tracking-widest">{v.name}</h4>
              <p className="text-gray-600 text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      )
    },
    'who-principles': {
      title: 'Operating Principles',
      subtitle: 'The foundational methods of our implementation strategy.',
      parent: 'who-we-are',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920',
      body: (
        <ul className="space-y-6">
          {[
            "Community leadership and ownership",
            "Public/Private Partnership and Collaboration",
            "Integrated development",
            "Sustainability",
            "Women’s empowerment and Equity"
          ].map((p, i) => (
            <li key={i} className="flex gap-4 items-center p-4 bg-[#1B3B5F]/5 rounded-xl border-l-4 border-[#C5A07D]">
              <span className="text-[#C5A07D] font-black">0{i+1}</span>
              <span className="font-bold text-[#1B3B5F]">{p}</span>
            </li>
          ))}
        </ul>
      )
    },
    'what-maternal': {
      title: 'Maternal & Child Health',
      subtitle: 'Securing the health of the next generation of Ethiopians.',
      parent: 'what-we-do',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>Our maternal health initiatives provide essential clinical support and education to mothers in rural areas, focusing on prenatal care, safe delivery practices, and infant nutrition.</p>
      )
    },
    'what-nutrition': {
      title: 'Nutrition & Food Security',
      subtitle: 'Addressing the root causes of malnutrition in vulnerable areas.',
      parent: 'what-we-do',
      image: 'https://images.unsplash.com/photo-1488459739019-19e53f178276?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>CHROTA works with local farmers and community leaders to build sustainable food systems, ensuring that even the most vulnerable families have access to the basic nutritional requirements for physical and mental development.</p>
      )
    },
    'what-blindness': {
      title: 'Avoidable Blindness',
      subtitle: 'Targeting Trachoma elimination using the WHO SAFE strategy.',
      parent: 'what-we-do',
      image: 'https://images.unsplash.com/photo-1579154235602-4c07998e3b84?auto=format&fit=crop&q=80&w=1920',
      body: (
        <div className="space-y-6">
          <p>With 61 million people in Ethiopia living in endemic areas, we are aggressive in implementing clinical trials and surgical interventions for Trichiasis.</p>
          <div className="bg-[#C5A07D]/10 p-6 rounded-2xl border-2 border-[#C5A07D]">
            <h4 className="font-black text-[#1B3B5F] mb-2">SAFE Strategy Implementation:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Surgery for Trichiasis</li>
              <li>Antibiotics to clear infection</li>
              <li>Facial cleanliness</li>
              <li>Environmental improvement</li>
            </ul>
          </div>
        </div>
      )
    },
    'what-disease': {
      title: 'Disease Control',
      subtitle: 'Technical support for prevention and management of public health problems.',
      parent: 'what-we-do',
      image: 'https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>CHROTA provides high-level technical expertise to regional health bureaus, helping them design and monitor effective disease control protocols across Ethiopia.</p>
      )
    },
    'what-climate': {
      title: 'Climate Change & Health',
      subtitle: 'Mitigating environmental impacts on community wellness.',
      parent: 'what-we-do',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>We investigate the links between changing climate patterns and the prevalence of neglected tropical diseases, developing resilience strategies for vulnerable catchments.</p>
      )
    },
    'approach-ownership': {
      title: 'Community Ownership',
      subtitle: 'From beneficiaries to active owners of development.',
      parent: 'our-approach',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>Responsibility lies at the heart of our model. We empower community members to take charge of their lives by being active participants rather than passive recipients of aid.</p>
      )
    },
    'approach-integrated': {
      title: 'Integrated Development',
      subtitle: 'Addressing the full spectrum of basic needs.',
      parent: 'our-approach',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>Our approach resolves root cause developmental challenges associated with water, electricity, sanitation, education, housing, and health simultaneously.</p>
      )
    },
    'approach-participatory': {
      title: 'Participatory Strategy',
      subtitle: 'Designing projects based on community priorities.',
      parent: 'our-approach',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920',
      body: (
        <p>CHROTA ensures that project concepts and designs originate from the community themselves, identifying and prioritizing their own development needs.</p>
      )
    }
  };

  const page = contentMap[pageId];

  if (!page) return null;

  return (
    <div className="bg-white">
      <section className="bg-[#1B3B5F] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={page.image} className="w-full h-full object-cover opacity-20" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3B5F] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <button 
            onClick={() => onNavigate(page.parent)}
            className="text-[#C5A07D] font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            ❮ Back to {page.parent.replace(/-/g, ' ')}
          </button>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">{page.title}</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed">{page.subtitle}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-xl prose-slate max-w-none text-[#1B3B5F] leading-relaxed">
            {page.body}
          </div>
          
          <div className="mt-20 pt-12 border-t border-gray-100">
             <h4 className="text-[#C5A07D] font-black uppercase tracking-widest text-sm mb-6">Explore more</h4>
             <div className="flex flex-wrap gap-4">
               <button 
                onClick={() => onNavigate('home')}
                className="px-6 py-3 bg-gray-50 text-[#1B3B5F] font-bold rounded-lg hover:bg-gray-100 transition-colors"
               >
                 Back Home
               </button>
               <button 
                onClick={() => onNavigate('partners')}
                className="px-6 py-3 bg-[#1B3B5F] text-white font-bold rounded-lg hover:bg-[#152e4a] transition-colors"
               >
                 Our Partners
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
