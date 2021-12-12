const baseURL = "https://api.sampleapis.com/coffee/hot";
fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    data.map((el, i) => {
      console.log(el);
    });
  });

var products = [];
const producer = () => {};
