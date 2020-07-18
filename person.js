let express = require("express");
let db = require("./db");
let weather = require("./weather");
let axios = require("axios");

db._connect();

let app = express();
app.use(express.json());

app.get("/:name", (req, res) => {
  let data = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.params.name}&appid=f02e3e68b5adc1fe82f2898ceb50bf99`
  );
  axios.all([data]).then(
    axios.spread((responce) => {
      let result = {
        name: responce.data.name,
        temp: (responce.data.main.temp - 273, 15),
        date: Date.now(),
      };
      weather.create(result, (err, dat) => {
        if (err) throw err;
        res.send(dat);
      });
    })
  );
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port : " + port);
});