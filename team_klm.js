async function start() {
  const [data_lisnyc, data_tlvber, data_arnlhr] = await getAirlineDataList();

  const img = setLogo();

  const klm = document.querySelector("#klm");
  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const thirdP = document.createElement("p");
  const h1 = document.createElement("h1");
  h1.textContent = "KLM Airline:";

  firstP.textContent = `Lisbon to Newyork costs ${data_lisnyc.price} dollars`;
  secondP.textContent = `TelAviv to Berlin costs ${data_tlvber.price} dollars`;
  thirdP.textContent = `Stockholm to London costs ${data_arnlhr.price} dollars`;

  klm.append(img);
  klm.append(h1);
  klm.append(firstP);
  klm.append(secondP);
  klm.append(thirdP);
}

async function getAirlineDataList() {
  const url = "https://flyapi.onrender.com";
  const lisnyc = fetch(`${url}/lis_nyc/klm`);
  const tlvber = fetch(`${url}/tlv_ber/klm`);
  const arnlhr = fetch(`${url}/arn_lhr/klm`);

  const response = await Promise.all([lisnyc, tlvber, arnlhr]);
  const dataList = await Promise.all(response.map(async (entry) => await entry.json()));

  return dataList;
}

function setLogo() {
  const img = document.createElement("img");
  img.src = "https://logo.clearbit.com/klm.com";
  img.width = "100";
  return img;
}

window.addEventListener("load", () => {
  start();
});
