// Fetch all routes for the airline and insert into #wizz

(async () => {
  const firstFlight = await fetch("https://flyapi.onrender.com/tlv_ber/wizz");
  const secondFlight = await fetch("https://flyapi.onrender.com/arn_lhr/wizz");
  const thirdFlight = await fetch("https://flyapi.onrender.com/lis_nyc/wizz");

  const tlvBer = await firstFlight.json();
  const arnLhr = await secondFlight.json();
  const lisNyc = await thirdFlight.json();

  const wizzContainer = document.getElementById("wizz");

  const wizzHeader = document.createElement("h2");
  wizzHeader.textContent = "Wizz";

  const pricesParagraph = document.createElement("p");

  pricesParagraph.innerHTML = `Telaviv to Berlin price is $${tlvBer.price} <br>`;
  pricesParagraph.innerHTML += `Stockholm to London price is $${arnLhr.price} <br>`;
  pricesParagraph.innerHTML += `Lisburn to  New York price is $${lisNyc.price} <br>`;

  // logo img
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "https://logo.clearbit.com/wizzair.com");
  logoImg.setAttribute("alt", "Wizz Logo");
  logoImg.style.width = "100px";
  logoImg.style.height = "100px";

  wizzContainer.append(logoImg);
  wizzContainer.append(wizzHeader);
  wizzContainer.append(pricesParagraph);
})();
