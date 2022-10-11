// Fetch all routes for the airline and insert into #delta
// // Fetch all routes for the airline and insert into #delta

const baseURL = `https://flyapi.onrender.com/`;
const airLine = 'delta';
const filghts = [
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
  return `${baseURL}${flight.origin.toLowerCase()}_${flight.destination.toLowerCase()}/${airLine}`;
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

const flightAppend = async (flightJsons) => {
  flightJsons = await getFilghtsJson();
  console.log(flightJsons);
  flightJsons.map((flightJson) => {
    const searchEl = document.createElement('div');
    const logoEl = document.createElement('img');
    const deltaEl = document.querySelector('#delta');
    const routeEl = document.createElement('p');
    const priceEl = document.createElement('p');
    logoEl.setAttribute('src', 'https://logo.clearbit.com/delta.com');
    const { price, origin, destination } = flightJson;
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
  });
};

flightAppend();
