// not sure what kind of naming convention will be better

const BASE_URL = `https://flyapi.onrender.com/`;
const airline = 'delta';
const airportCodes = [
  {
    origin: 'LIS',
    destination: 'NYC',
  },
  {
    origin: 'TLV',
    destination: 'BER',
  },
  {
    origin: 'ARN',
    destination: 'LHR',
  },
];

const endPoint = (flight) => {
  return `${BASE_URL}${flight.origin.toLowerCase()}_${flight.destination.toLowerCase()}/${airline}`;
};

const getFilghtsJson = async () => {
  const responses = await Promise.all(
    filghts
      .filter((flight) => endPoint(flight))
      .map(async (flight) => {
        const response = await fetch(endPoint(flight));
        const dataJson = await response.json();
        dataJson.origin = flight.origin;
        dataJson.destination = flight.destination;
        return dataJson;
      })
  );
  return responses;
};

const createDOM = (data) => {
  const searchEl = document.createElement('div');
  const logoEl = document.createElement('img');
  const deltaEl = document.querySelector('#delta');
  const routeEl = document.createElement('p');
  const priceEl = document.createElement('p');
  logoEl.setAttribute('src', 'https://logo.clearbit.com/delta.com');
  const { price, origin, destination } = data;
  priceEl.innerText = `$${price}`;
  routeEl.textContent = `${origin} `;
  routeEl.textContent += `${destination}`;

  // layout and styling
  searchEl.style.display = 'flex';
  searchEl.style.gap = '1rem';
  logoEl.style.width = '40px';
  logoEl.style.height = '40px';
  priceEl.style.fontWeight = '600';
  searchEl.append(logoEl, routeEl, priceEl);
  deltaEl.appendChild(searchEl);
};

const getFlightDataAndCreateDom = async (flightJsons) => {
  flightJsons = await getFilghtsJson();
  flightJsons.forEach((flightJson) => {
    createDOM(flightJson);
  });
};

getFlightDataAndCreateDom();
