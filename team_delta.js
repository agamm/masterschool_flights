// Fetch all routes for the airline and insert into #delta

const getFlightLisNyc = async () => {
  const response = await fetch("https://flyapi.onrender.com/lis_nyc/delta");
  const dataJson = await response.json();
  console.log(dataJson);
  const deltaEl = document.querySelector("#delta");
  const urlEl = document.createElement("p");
  const priceEl = document.createElement("p");
  urlEl.innerText = dataJson.url;
  priceEl.innerText = dataJson.price;
  deltaEl.append(urlEl, priceEl);
};
const getFlightTlvBer = async () => {
  const response = await fetch("https://flyapi.onrender.com/tlv_ber/delta");
  const dataJson = await response.json();
  console.log(dataJson);
  const deltaEl = document.querySelector("#delta");
  const urlEl = document.createElement("p");
  const priceEl = document.createElement("p");
  urlEl.innerText = dataJson.url;
  priceEl.innerText = dataJson.price;
  deltaEl.append(urlEl, priceEl);
};
const getFlightArnLhr = async () => {
  const response = await fetch("https://flyapi.onrender.com/arn_lhr/delta");
  const dataJson = await response.json();
  console.log(dataJson);
  const deltaEl = document.querySelector("#delta");
  const urlEl = document.createElement("p");
  const priceEl = document.createElement("p");
  urlEl.innerText = dataJson.url;
  priceEl.innerText = dataJson.price;
  deltaEl.append(urlEl, priceEl);
};

getFlightLisNyc();
getFlightTlvBer();
getFlightArnLhr();
