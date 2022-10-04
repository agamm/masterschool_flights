// Fetch all routes for the airline and insert into #wizz

(async () => {
  const firstFlight = await fetch("https://flyapi.onrender.com/tlv_ber/wizz");
  const secondFlight = await fetch("https://flyapi.onrender.com/arn_lhr/wizz");
  const thirdFlight = await fetch("https://flyapi.onrender.com/lis_nyc/wizz");

  const tlvBer = await firstFlight.json();
  const arnLhr = await secondFlight.json();
  const lisNyc = await thirdFlight.json();

  const wizzContainer = document.getElementById("wizz");
  wizzHeader.textContent = "Wizz";

  const wizzHeader = document.createElement("h2");
  const pricesParagraph = document.createElement("p");

  pricesParagraph.innerHTML = `Telaviv to Berlin price is $${tlvBer.price} <br>`;
  pricesParagraph.innerHTML += `Stockholm to London price is $${arnLhr.price} <br>`;
  pricesParagraph.innerHTML += `Lisburn to  New York price is $${lisNyc.price} <br>`;

  wizzContainer.append(wizzHeader);
  wizzContainer.append(pricesParagraph);
})();
