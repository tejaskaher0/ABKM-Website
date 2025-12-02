'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileDialog from '@/components/ProfileDialog';

// Mock Data
const MOCK_PROFILES = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Profile Name ${i + 1}`,
  age: 24 + (i % 10),
  location: i % 2 === 0 ? 'Mumbai, MH' : 'Pune, MH',
  occupation: i % 3 === 0 ? 'Software Engineer' : i % 3 === 1 ? 'Doctor' : 'Business',
  image: `/profile${(i % 5) + 1}.jpg`,
  gender: i % 2 === 0 ? 'Bride' : 'Groom',
  caste: i % 3 === 0 ? 'Maratha' : 'Rajput',
  maritalStatus: 'Unmarried',
}));

export default function DashboardPage() {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [filters, setFilters] = useState({
    seeking: 'Bride',
    ageFrom: '21',
    ageTo: '35',
    caste: 'Any',
    occupation: 'Any',
  });

  // Filter Logic (Simple client-side)
  const filteredProfiles = MOCK_PROFILES.filter((profile) => {
    // Basic filtering example
    if (filters.seeking !== 'Any' && profile.gender !== filters.seeking) return false;
    if (profile.age < parseInt(filters.ageFrom) || profile.age > parseInt(filters.ageTo)) return false;
    if (filters.caste !== 'Any' && profile.caste !== filters.caste) return false;
    if (filters.occupation !== 'Any' && !profile.occupation.includes(filters.occupation)) return false;
    return true;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />

      {/* Header Banner */}
      <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Match</h1>
          <p className="text-lg text-gray-300">Browse through thousands of verified profiles.</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Filters</h2>
              
              <div className="space-y-6">
                {/* Seeking */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I'm looking for</label>
                  <select
                    name="seeking"
                    value={filters.seeking}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-gray-900 focus:border-gray-900"
                  >
                    <option value="Bride">Bride</option>
                    <option value="Groom">Groom</option>
                  </select>
                </div>

                {/* Age Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="ageFrom"
                      value={filters.ageFrom}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-gray-900 focus:border-gray-900"
                      placeholder="From"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      name="ageTo"
                      value={filters.ageTo}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-gray-900 focus:border-gray-900"
                      placeholder="To"
                    />
                  </div>
                </div>

                {/* Caste */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Caste</label>
                  <select
                    name="caste"
                    value={filters.caste}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-gray-900 focus:border-gray-900"
                  >
                    <option value="Any">Any</option>
                    <option value="Maratha">Maratha</option>
                    <option value="Rajput">Rajput</option>
                    <option value="Brahmin">Brahmin</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                  <select
                    name="occupation"
                    value={filters.occupation}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-gray-900 focus:border-gray-900"
                  >
                    <option value="Any">Any</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Business">Business</option>
                    <option value="Government Job">Government Job</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Profile Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Showing {filteredProfiles.length} Profiles
              </h2>
              <div className="text-sm text-gray-500">
                Sort by: <span className="font-medium text-gray-900 cursor-pointer">Newest</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => setSelectedProfile(profile)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium group-hover:bg-gray-400 transition-colors">
                        {profile.name}
                     </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{profile.name}</h3>
                    <div className="text-sm text-gray-500 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profile.location}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                        {profile.age} Yrs
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                        {profile.occupation}
                      </span>
                    </div>

                    <button className="w-full border border-gray-900 text-gray-900 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ProfileDialog 
        isOpen={!!selectedProfile} 
        onClose={() => setSelectedProfile(null)} 
        profile={selectedProfile} 
      />

      <Footer />
    </div>
  );
}
