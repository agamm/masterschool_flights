// Fetch all routes for the airline and insert into #delta
const getFlight = async (from, to, resourse) => {
  const response = await fetch(resourse);
  const dataJson = await response.json();
  const searchEl = document.createElement("div");
  const logoEl = document.createElement("img");
  const deltaEl = document.querySelector("#delta");
  const routeEl = document.createElement("p");
  const priceEl = document.createElement("p");
  logoEl.setAttribute("src", "https://logo.clearbit.com/delta.com");
  routeEl.innerText = `Flight from ${from} to ${to}`;
  priceEl.innerText = `$${dataJson.price}`;
  searchEl.append(logoEl, routeEl, priceEl);
  deltaEl.appendChild(searchEl);

  // layout and styling
  searchEl.style.display = "flex";
  searchEl.style.gap = "1rem";
  logoEl.style.width = "40px";
  logoEl.style.height = "40px";
  priceEl.style.fontWeight = "600";
};

getFlight("Lisbon", "New-York", "https://flyapi.onrender.com/lis_nyc/delta");
getFlight("Tel Aviv", "Berlin", "https://flyapi.onrender.com/tlv_ber/delta");
getFlight("Stockholm", "London", "https://flyapi.onrender.com/arn_lhr/delta");
