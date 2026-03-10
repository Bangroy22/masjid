import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Melayani Kebutuhan Ummat
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
