import Image from 'next/image';

interface AboutSectionProps {
  title?: string;
  description?: string;
  features?: string[];
  reverse?: boolean;
}

export default function AboutSection({
  title = "About Us",
  description = "We are dedicated to helping you find your perfect life partner. Our platform connects individuals based on shared values, interests, and life goals, ensuring meaningful connections that last a lifetime.",
  features = [
    'Verified profiles for a safe experience',
    'Secure platform with privacy controls',
    'Personalized matches based on preferences',
  ],
  reverse = false,
}: AboutSectionProps) {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
             
               <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-medium text-gray-500">{title} Image</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
