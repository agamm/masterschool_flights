// Fetch all routes for the airline and insert into #wizz

(async () => {

  //getRoutePrice function
  const getRoutePrice = async(url) =>{
    const response  = await fetch(url);
    const flightData = await response.json()
    return flightData.price;
  }

  const tlvBer = await getRoutePrice("https://flyapi.onrender.com/tlv_ber/wizz");
  const arnLhr = await getRoutePrice("https://flyapi.onrender.com/arn_lhr/wizz");
  const lisNyc = await getRoutePrice("https://flyapi.onrender.com/lis_nyc/wizz");

  const wizzContainer = document.getElementById("wizz");

  // logo img
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "https://logo.clearbit.com/wizzair.com");
  logoImg.setAttribute("alt", "Wizz Logo");
  logoImg.style.width = "100px";
  logoImg.style.height = "100px";
  wizzContainer.append(logoImg);

  const wizzHeader = document.createElement("h2");
  wizzHeader.textContent = "Wizz";
  wizzContainer.append(wizzHeader);

  const pricesParagraph = document.createElement("p");
  pricesParagraph.innerHTML = `Telaviv to Berlin price is $${tlvBer} <br>`;
  pricesParagraph.innerHTML += `Stockholm to London price is $${arnLhr} <br>`;
  pricesParagraph.innerHTML += `Lisburn to  New York price is $${lisNyc} <br>`;
  wizzContainer.append(pricesParagraph);
})();
