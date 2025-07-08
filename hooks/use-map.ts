import { fetchLocationName } from "@/services/map/map.api";
import { useQuery } from "@tanstack/react-query";

export default function useMap(loc: { lat: number; lng: number } | null) {
  const lat = loc?.lat;
  const lng = loc?.lng;

  const getLocationName = useQuery({
    queryKey: ["loc", lat, lng],
    queryFn: () => fetchLocationName(lat, lng),
    enabled: !!lat && !!lng,
  });

  return {
    location: getLocationName.data,
    isLoadingLocation: getLocationName.isLoading,
  };
}
