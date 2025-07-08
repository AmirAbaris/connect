"use server";

import axios from "axios";

export async function fetchLocationName(
  lat: number | undefined,
  lng: number | undefined
): Promise<string | null> {
  if (!lat || !lng) return null;

  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "thisisamirabaris@gmail.com",
      },
    });

    const locationName = response.data.name;
    return locationName;
  } catch (error) {
    console.error("Error fetching location name:", error);
    return null;
  }
}
