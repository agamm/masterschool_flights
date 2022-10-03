// Fetch all routes for the airline and insert into #wizz
// Fetch all routes for the airline and insert into #wizz

(async () => {
  const firstFlight = await fetch("https://flyapi.onrender.com/tlv_ber/wizz");
  // const secondFlight = await fetch("https://flyapi.onrender.com/arn_lhr/wizz");
  // const thirdFlight = await fetch("https://flyapi.onrender.com/lis_nyc/wizz");
  const data = await firstFlight.json();
  const wizz = document.getElementById("wizz");
  const wizzBody = document.createElement("p");
  //   const price = wizzBody.price;
  wizzBody.innerHTML = "Wizz: " + data.price;
  wizz.append(wizzBody);
  //   wizz.append(price);
  //   console.log(price);
})();
