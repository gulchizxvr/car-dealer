'use client';

import { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import { getPeriod } from '@/utils/getPeriod';
import { getAllMakes } from '@/services/api';

export interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

const Home: FC = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    getAllMakes().then(data => setMakes(data));
  }, []);

  const years = getPeriod();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Car Dealer Filter
      </h1>

      <div className="mb-4 w-full max-w-xs">
        <label
          htmlFor="make"
          className="block text-lg font-medium text-gray-700"
        >
          Select Vehicle Make
        </label>
        <select
          id="make"
          value={selectedMake}
          onChange={e => setSelectedMake(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Make</option>
          {makes.map(make => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 w-full max-w-xs">
        <label
          htmlFor="year"
          className="block text-lg font-medium text-gray-700"
        >
          Select Model Year
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <Link href={`/result/${selectedMake}/${selectedYear}`}>
          <button
            disabled={!selectedMake || !selectedYear}
            className={`px-4 py-2 rounded-md text-white ${
              !selectedMake || !selectedYear
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
