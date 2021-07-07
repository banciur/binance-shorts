import { BinanceClient } from "./binanceClient";

const APIKEY = "aaa";
const APISECRET = "bbb";

const main = async () => {
  const binance = new BinanceClient(APIKEY, APISECRET);
  console.log(await binance.systemStatus());
};

main()
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });
