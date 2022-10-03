const url = "https://flyapi.onrender.com";

(async function () {
  const lisnyc = await fetch(`${url}/lis_nyc/klm`);
  const tlvber = await fetch(`${url}/tlv_ber/klm`);
  const arnlhr = await fetch(`${url}/arn_lhr/klm`);
  const data_lisnyc = await lisnyc.json();
  const data_tlvber = await tlvber.json();
  const data_arnlhr = await arnlhr.json();

  console.log(data_lisnyc);

  const klm = document.querySelector("#klm");
  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const thirdP = document.createElement("p");
  const h1 = document.createElement("h1");
  h1.textContent = "KLM Airline";

  firstP.textContent = `Lisbon to Newyork costs ${data_lisnyc.price} dollars`;
  secondP.textContent = `TelAviv to Berlin costs ${data_tlvber.price} dollars`;
  thirdP.textContent = `Stockholm to London costs ${data_arnlhr.price} dollars`;

  klm.append(h1);
  klm.append(firstP);
  klm.append(secondP);
  klm.append(thirdP);
})();
