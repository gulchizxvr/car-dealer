import { VehicleMake } from '@/types/vehicle/make';
import { VehicleModel } from '@/types/vehicle/model';

export async function getAllMakes(): Promise<VehicleMake[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch vehicle makes');
  }

  const data = await res.json();
  return data.Results || [];
}

export async function getVehicleModels(
  makeId: string,
  year: string
): Promise<VehicleModel[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch vehicle models');
  }

  const data = await res.json();
  return data.Results || [];
}
