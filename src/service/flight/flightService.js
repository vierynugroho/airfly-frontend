export const getFlights = async (filters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, value);
    }
  });

  let url = `${import.meta.env.VITE_API_URL}/api/v1/flights?${params.toString()}`;
  console.log("url: ", url);

  const response = await fetch(url, {
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result) {
    throw new Error(result?.error?.message);
  }
  return result?.data;
};

export const getFlightId = async (id) => {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/flights/${id}`;

  const response = await fetch(url, {
    method: "GET",
  });

  // get data
  const result = await response.json();
  return result;
};

// Daftar Params untuk data flights
//   page,
//   limit,
//   seatClass,
//   isCheapest,
//   flightNumber,
//   priceMin,
//   priceMax,
//   earliestDeparture,
//   latestDeparture,
//   earliestArrival,
//   latestArrival,
//   shortest,
//   arrivalAirport,
//   departureAirport,
//   departureDate;
// Contoh Cara pemanggilan :
// const flights = await getFlights({
//   page: 1,
//   limit: 10,
//   seatClass: "economy",
//   isCheapest: true,
//   flightNumber: "12345",
//   priceMin: 500000,
//   priceMax: 1000000,
//   earliestDeparture: "2024-12-01",
//   latestDeparture: "2024-12-10",
//   arrivalAirport: "JFK",
//   departureAirport: "LAX",
//   departureDate: "2024-12-01",
// });