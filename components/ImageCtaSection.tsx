import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  primary?: boolean;
}

interface ImageCtaSectionProps {
  imageSrc: string;  
  title: string;
  description: string;
  buttons: ButtonProps[];
}

export default function ImageCtaSection({ imageSrc, title, description, buttons }: ImageCtaSectionProps) {
  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
          
        
          <div className="absolute inset-0 bg-gray-800">
             {/* 
             <Image
               src={imageSrc}
               alt={title}
               fill
               className="object-cover opacity-60"
             />
             */}
              
             <div className="w-full h-full flex items-center justify-center opacity-30">
                <span className="text-4xl font-bold text-white uppercase tracking-widest">{imageSrc.replace('/', '').replace('.jpg', '')}</span>
             </div>
          </div>

          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl drop-shadow-md">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
