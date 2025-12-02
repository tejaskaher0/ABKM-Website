'use client';

import { useEffect, useRef } from 'react';

interface ProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  profile: any;  
}

export default function ProfileDialog({ isOpen, onClose, profile }: ProfileDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div 
        ref={dialogRef}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
         
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-gray-900">Profile Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-4 border-4 border-gray-50 shadow-md">
                 {/* Placeholder Image */}
                 <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-2xl font-bold">
                    {profile.name.charAt(0)}
                 </div>
                 {/* <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{profile.name}</h3>
              <p className="text-gray-500 font-medium">{profile.occupation}</p>
              <p className="text-gray-400 text-sm mt-1">{profile.location}</p>
              
              <div className="mt-6 w-full space-y-3">
                <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Send Interest
                </button>
                <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  Shortlist
                </button>
              </div>
            </div>

            
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <DetailRow label="Name" value={profile.name} />
                <DetailRow label="जन्मतारीखः (Date of Birth)" value={profile.dob || '01/01/1995'} />
                <DetailRow label="उंचाई: (Height)" value={profile.height || "5'6\""} />
                <DetailRow label="रक्त गटः (Blood Group)" value={profile.bloodGroup || 'B+'} />
                <DetailRow label="रंगः (Complexion)" value={profile.complexion || 'Fair'} />
                <DetailRow label="मांगलीक है/नहीं" value={profile.isManglik ? 'Yes' : 'No'} />
                <DetailRow label="विवाहित स्थिति" value={profile.maritalStatus || 'Unmarried'} />
                <DetailRow label="जन्म समयः (Birth Time)" value={profile.birthTime || '10:30 AM'} />
                <DetailRow label="जन्म स्थानः (Birth Place)" value={profile.birthPlace || profile.location} />
                <DetailRow label="पिता का नामः (Father's Name)" value={profile.fatherName || 'Mr. Sharma'} />
                <DetailRow label="व्यवसाय / नौकरीः" value={profile.occupation} />
                <DetailRow label="कुलः (Kul/Clan)" value={profile.kul || 'Kashyap'} />
                <DetailRow label="गौत्रः (Gotra)" value={profile.gotra || 'Bharadwaj'} />
                <DetailRow label="भाईयोंकी संख्या" value={profile.brothers || '1'} />
                <DetailRow label="बहनौकी संख्या" value={profile.sisters || '1'} />
                <DetailRow label="पता: (Address)" value={profile.address || 'Mumbai, Maharashtra'} />
                <DetailRow label="मकान: (House ownership)" value={profile.houseOwnership || 'Owned'} />
                <DetailRow label="शिक्षा: (Education)" value={profile.education || 'B.Tech'} />
                <DetailRow label="मासिक प्राप्ती :" value={profile.income || '50,000/pm'} />
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">वर के बारें में अपेक्षा : (Expectations)</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Looking for a well-educated, understanding, and family-oriented partner who values traditions and modern outlook alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-gray-50 pb-2 last:border-0">
      <span className="text-sm font-semibold text-gray-500 sm:w-1/2">{label}</span>
      <span className="text-sm font-medium text-gray-900 sm:w-1/2">{value}</span>
    </div>
  );
}
