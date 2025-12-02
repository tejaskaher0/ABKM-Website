import RegistrationForm from './RegistrationForm';

export default function MatrimonialHero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-gray-100">
 
      <div className="absolute inset-0 bg-gray-300 overflow-hidden">
         {/* 
         <Image
           src="/matrimonial-hero.jpg"
           alt="Matrimonial Hero"
           fill
           className="object-cover"
         />
         */}
         <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <span className="text-4xl font-bold text-gray-700 opacity-20 uppercase tracking-widest">Hero Background Image</span>
         </div>
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          
          <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Begin Your Journey to Forever
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-lg mx-auto md:mx-0 drop-shadow-md">
              Join thousands of happy couples who found their soulmate on our trusted platform. Safe, secure, and personalized for you.
            </p>
            <div className="hidden md:block pt-4">
               <div className="inline-flex items-center space-x-2 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Over 500 new profiles added today</span>
               </div>
            </div>
          </div>

     
          <div className="w-full md:w-5/12">
            <RegistrationForm />
          </div>
          
        </div>
      </div>
    </section>
  );
}
