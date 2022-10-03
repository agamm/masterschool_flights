const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(`Welcome to Agam's Airline price API!
  To get a price for an airline send a GET request to:
  /:airline result will be in JSON. All prices are in USD.`);
});

const airlineData = {
  lis_nyc: {
    wizz: {
      url: "wizzair.com",
      price: 0,
    },
    klm: {
      url: "klm.com",
      price: 0,
    },
    delta: {
      url: "delta.com",
      price: 0,
    },
  },
  tlv_ber: {
    wizz: {
      url: "wizzair.com",
      price: 0,
    },
    klm: {
      url: "klm.com",
      price: 0,
    },
    delta: {
      url: "delta.com",
      price: 0,
    },
  },
  arn_lhr: {
    wizz: {
      url: "wizzair.com",
      price: 0,
    },
    klm: {
      url: "klm.com",
      price: 0,
    },
    delta: {
      url: "delta.com",
      price: 0,
    },
  },
};

app.get("/:route/:airline", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { route, airline } = req.params;

  if (!airlineData.hasOwnProperty(route)) {
    throw new Error("Route doesn't exist! (use: lis_nyc, tlv_ber, arn_lhr)");
  }
  if (!airlineData[route].hasOwnProperty(airline)) {
    throw new Error("Airline doesn't exist! ");
  }

  let data = airlineData[route][airline];
  data.price = Math.round(Math.random() * 800 + 99);
  res.json(data);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
