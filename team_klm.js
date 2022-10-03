// Fetch all routes for the airline and insert into #klm
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

  firstP.textContent = `Lisbon to Newyork costs ${data_lisnyc.price} dollar`;
  secondP.textContent = data_tlvber.price;
  thirdP.textContent = data_arnlhr.price;

  klm.append(firstP);
  klm.append(secondP);
  klm.append(thirdP);
})();
