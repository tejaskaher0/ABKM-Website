'use client';

import { useState } from 'react';

export default function ImageGallery() {
  const initialImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
  ];

  const moreImages = [
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
  ];

  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setImages([...initialImages, ...moreImages]);
    setShowMore(true);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Happy Moments</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of weddings and engagements from our successful matches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
               {/* Placeholder for Gallery Image */}
               <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 font-medium group-hover:bg-gray-300 transition-colors">
                  Gallery Image {index + 1}
               </div>
               {/* 
               <Image
                 src={src}
                 alt={`Gallery image ${index + 1}`}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
               */}
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
