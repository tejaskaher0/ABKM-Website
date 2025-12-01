export default function InfoCardsSection() {
  const features = [
    {
      title: 'Trusted Community',
      description: 'Join a community of genuine individuals looking for serious relationships. We maintain high standards of integrity.',
    },
    {
      title: 'Modern & Simple',
      description: 'Experience a clutter-free, easy-to-use interface designed for the modern generation. No complicated forms.',
    },
    {
      title: 'Dedicated Support',
      description: 'Our relationship managers are always available to assist you in your journey towards finding a partner.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes SoulConnect the preferred choice for thousands of happy couples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
