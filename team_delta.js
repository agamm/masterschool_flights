// Fetch all routes for the airline and insert into #delta
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

const flightAppend = () => {

} 

const getFlightNYC = async () => {
  const response = await fetch('https://flyapi.onrender.com/lis_nyc/delta');
  const dataJson = await response.json();
  console.log(dataJson);
  const deltaEl = document.querySelector('#delta');
  const urlEl = document.createElement('p');
  const priceEl = document.createElement('p');
  urlEl.innerText = dataJson.url;
  priceEl.innerText = dataJson.price;
  deltaEl.append(urlEl, priceEl);
};
getFlightNYC();

const getFlightTLV = async () => {
  const response = await fetch('https://flyapi.onrender.com/tlv_ber/delta');
  const dataJson = await response.json();
};
