import { useState, useEffect } from "react";
import axios from "axios";

interface NearestCityPropTypes {
  cities: string[];
}

//RETURN ARRAY OF OBJECTS CONTAINING NAMES AND COORDINATES OF CALLED CITIES
const useGetCalculatedCitiesDistances = async (citiesNames: string[]) => {
  const API_KEY = "41046294a39f15492a4a40aa9af2cb16";
  const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";

  //API EXAMPLE LINK
  // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

  const citiesCoord: {}[] = [];
  let requests = citiesNames.map((name) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}?q=${name}&limit=1&appid=${API_KEY}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  try {
    const responses = await Promise.all(requests);
    responses.forEach((response) => {
      if (response) citiesCoord.push(response);
    });
  } catch (err) {
    console.log(err);
  }

  //IMPLEMENT SO WE ALSO GET NAMES OF THE CITIES
  const calculatedDistances = citiesCoord.map((city) =>
    useCalculateDistance(
      userLocationPosition.defaultLatitude,
      userLocationPosition.defaultLongitude,
      city.latitude,
      city.longitude
    )
  );

  return calculatedDistances;
};

type DistanceTypes = {
  userLat: number;
  userLong: number;
  cityLat: number;
  cityLong: number;
};

// RETURNS NEAREST CITY FROM useGetCitiesLocation TO USER LOCATION
const useCalculateDistance = ({
  userLat,
  userLong,
  cityLat,
  cityLong,
}: DistanceTypes) => {
  const radLat1 = (Math.PI * userLat) / 180;
  const radLat2 = (Math.PI * cityLat) / 180;
  const longDistance = userLong - cityLong;
  const radDistance = (Math.PI * longDistance) / 180;

  let distance =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDistance);

  if (distance > 1) {
    distance = 1;
  }

  distance = Math.acos(distance);
  distance = (distance * 180) / Math.PI;
  distance = distance * 60 * 1.1515;

  return distance;
};

export const useFindNearestCity = async ({ cities }: NearestCityPropTypes) => {
  //get current position
  const [userLocationPosition, setUserLocationPosition] = useState({});
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocationPosition({
          ...position,
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude,
        });
      });
    }
  }, []);

  //convert string array of city names to their long and lat
  const citiesLocation = await useGetCalculatedCitiesDistances(cities);

  const closestDistance = citiesLocation
    .slice(0)
    .sort((a: number, b: number) => a - b);

    return closestDistance
};
