const channel_based = require("./channel_based.json");
const manager_based = require("./manager_based.json");
const product_based = require("./product_based.json");
const earthquake_based = require("./earthquakes.json");

//buraya hakim değilim henüz fakat Soner abinin yaptıklarına göre ben de earthquake_based yaptım
//izlediğim json server ve axios videolarıyla birlikte

module.exports = () => ({
  channel: channel_based,
  manager: manager_based,
  product: product_based,
  earthquake: earthquake_based,
});
