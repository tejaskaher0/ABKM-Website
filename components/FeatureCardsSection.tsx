export default function FeatureCardsSection() {
  const features = [
    {
      title: 'Advanced Search',
      description: 'Find your perfect match with our powerful search filters and intelligent algorithms.',
      image: '/feature1.jpg', 
    },
    {
      title: 'Verified Profiles',
      description: 'Rest assured knowing that all profiles are manually verified for authenticity.',
      image: '/feature2.jpg',  
    },
    {
      title: 'Privacy Control',
      description: 'You have complete control over who sees your profile and contact information.',
      image: '/feature3.jpg', 
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best matchmaking services designed to help you find your life partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                 {/* Placeholder for Feature Image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium">
                    {feature.title} Image
                 </div>
                 {/* 
                 <Image
                   src={feature.image}
                   alt={feature.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
