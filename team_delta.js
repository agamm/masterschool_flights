// Fetch all routes for the airline and insert into #delta
// // Fetch all routes for the airline and insert into #delta

// const getFlight = async () => {
//   const response = await fetch('https://flyapi.onrender.com/lis_nyc/delta');
//   const dataJson = await response.json();
//   console.log(dataJson);
//   const deltaEl = document.querySelector('#delta');
//   const deltaPEl = document.createElement('p');
//   deltaPEl.appendChild(dataJson.price);
//   deltaEl.appendChild(deltaPEl);
// };

// getFlight();

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

/*
not sure what he wanted to do with the to from and how to  make sync with the mapping inside of flightAppend(), lazy response only getting prices. change the database to also hold from and to........
*/
// const createToAndFromList = () => {};

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
// const getFlightNYC = async () => {
//   const response = await fetch('https://flyapi.onrender.com/lis_nyc/delta');
//   const dataJson = await response.json();
//   // console.log(dataJson);
//   const deltaEl = document.querySelector('#delta');
//   const urlEl = document.createElement('p');
//   const priceEl = document.createElement('p');
//   urlEl.innerText = dataJson.url;
//   priceEl.innerText = dataJson.price;
//   deltaEl.append(urlEl, priceEl);
// };
// getFlightNYC();

// const getFlightTLV = async () => {
//   const response = await fetch('https://flyapi.onrender.com/tlv_ber/delta');
//   const dataJson = await response.json();
// };
