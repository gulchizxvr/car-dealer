import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/result/[makeId]/[year]/loading';
import Link from 'next/link';
import { Params } from '@/types/params';
import { getPeriod } from '@/utils/getPeriod';
import { getAllMakes, getVehicleModels } from '@/services/api';

export async function generateStaticParams() {
  const makes = await getAllMakes();
  const years = getPeriod();

  return makes.flatMap(make =>
    years.map(year => ({
      params: {
        makeId: make.MakeId.toString(),
        year: year.toString()
      }
    }))
  );
}

export default async function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = params;

  const models = await getVehicleModels(makeId, year);

  if (models.length === 0) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">Vehicle Models {year}</h1>
        <ul className="w-full max-w-xl bg-white shadow-md rounded-lg p-4">
          {models.map(model => (
            <li
              key={model.Model_ID}
              className="border-b last:border-0 py-2 text-gray-700"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href={`/`}>
            <button
              className={`px-4 py-2 rounded-md text-white  bg-blue-500 hover:bg-blue-700`}
            >
              Back to filter
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
