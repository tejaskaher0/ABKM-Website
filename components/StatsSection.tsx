export default function StatsSection() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Successful Matches', value: '5000+' },
    { label: 'Verified Profiles', value: '100%' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
