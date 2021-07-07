const fetch = require("node-fetch");

// const crypto = require('crypto');

const PATHS = class {
  static systemStatus = "/sapi/v1/system/status";
  // static tradeFee = "/sapi/v1/asset/tradeFee";
};

export class BinanceClient {
  protected base_url = "https://api.binance.com";
  protected api_key: string;
  protected api_secret: string;

  constructor(api_key: string, api_secret: string) {
    this.api_key = api_key;
    this.api_secret = api_secret;
  }

  async systemStatus() {
    const response = await fetch(this.base_url + PATHS.systemStatus);
    return await response.json();
  }

  /*async tradeFee() {
    // const key = new Buffer(this.api_secret, 'hex');
    const hmac = crypto.createHmac('sha256',  this.api_secret).update("").digest('hex');
    console.log(hmac)
    const response = await fetch(this.base_url + PATHS.tradeFee);
    return await response.json();
  }*/
}
