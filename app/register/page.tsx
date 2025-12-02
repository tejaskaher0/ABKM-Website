'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const canSubmitRef = useRef(false);
  const [formData, setFormData] = useState({
    // Personal
    fullName: '',
    gender: '',
    dob: '',
    age: '',
    height: '',
    complexion: '',
    maritalStatus: '',
    //  Family
    fatherName: '',
    motherName: '',
    brothers: '',
    sisters: '',
    kul: '',
    gotra: '',
    nativePlace: '',
    //  Contact
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    houseOwnership: '',
    //  Payment
    plan: 'basic',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    console.log('handleNext called, current step:', step);
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    console.log('handlePrev called, current step:', step);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called, canSubmit:', canSubmitRef.current, 'step:', step);
    
     
    if (!canSubmitRef.current) {
      console.log('canSubmitRef is false, returning early');
      return;
    }
     
    console.log('Form Submitted:', formData);
    canSubmitRef.current = false; // Reset the flag
    router.push('/dashboard');
  };

  const handleCompleteRegistration = () => {
    console.log('Complete Registration clicked');
    canSubmitRef.current = true;
     
  };

  const steps = [
    { id: 1, name: 'Personal' },
    { id: 2, name: 'Family' },
    { id: 3, name: 'Contact' },
    { id: 4, name: 'Payment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
        
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
              {steps.map((s) => (
                <div key={s.id} className="flex flex-col items-center bg-gray-50 px-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 ${
                      step >= s.id
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-400 border-gray-300'
                    }`}
                  >
                    {s.id}
                  </div>
                  <span
                    className={`mt-2 text-xs sm:text-sm font-medium ${
                      step >= s.id ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {step === 1 && 'Personal Details'}
                {step === 2 && 'Family Details'}
                {step === 3 && 'Contact Details'}
                {step === 4 && 'Payment & Plan'}
              </h2>

              <form 
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                 
                  if (e.key === 'Enter' && step !== 4) {
                    e.preventDefault();
                  }
                }}
              >
                 
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="Bride">Bride</option>
                          <option value="Groom">Groom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                          placeholder="Age"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                        <input
                          type="text"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                          placeholder="e.g. 5'8&quot;"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complexion</label>
                        <select
                          name="complexion"
                          value={formData.complexion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="Fair">Fair</option>
                          <option value="Wheatish">Wheatish</option>
                          <option value="Dark">Dark</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                        <select
                          name="maritalStatus"
                          value={formData.maritalStatus}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="Unmarried">Unmarried</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widow">Widow</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                 
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Brothers</label>
                        <input
                          type="number"
                          name="brothers"
                          value={formData.brothers}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sisters</label>
                        <input
                          type="number"
                          name="sisters"
                          value={formData.sisters}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kul / Clan</label>
                        <input
                          type="text"
                          name="kul"
                          value={formData.kul}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gotra</label>
                        <input
                          type="text"
                          name="gotra"
                          value={formData.gotra}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">City / Native Place</label>
                        <input
                          type="text"
                          name="nativePlace"
                          value={formData.nativePlace}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

               
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
                        <input
                          type="tel"
                          name="altPhone"
                          value={formData.altPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">House Ownership</label>
                        <select
                          name="houseOwnership"
                          value={formData.houseOwnership}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="Owned">Owned</option>
                          <option value="Rented">Rented</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
 
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {['Basic', 'Premium', 'VIP'].map((plan) => (
                        <div
                          key={plan}
                          onClick={() => setFormData({ ...formData, plan: plan.toLowerCase() })}
                          className={`cursor-pointer rounded-lg border p-4 text-center transition-all ${
                            formData.plan === plan.toLowerCase()
                              ? 'border-gray-900 bg-gray-50 ring-1 ring-gray-900'
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <h3 className="font-bold text-lg">{plan}</h3>
                          <p className="text-gray-500 text-sm mt-1">
                            {plan === 'Basic' ? '$0' : plan === 'Premium' ? '$49' : '$99'}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 outline-none"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
 
                <div className="mt-8 flex justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleCompleteRegistration}
                      className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                    >
                      Complete Registration
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
