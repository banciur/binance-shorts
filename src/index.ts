import { BinanceClient } from "./binanceClient";
import "./env";

const main = async () => {
  // TODO: Get rid of this ts-ignore
  // @ts-ignore
  const binance = new BinanceClient(process.env.APIKEY, process.env.APISECRET);
  console.log(await binance.systemStatus());
};

main()
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });
