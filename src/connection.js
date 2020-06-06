const default_endpoint = "wss://kusama-rpc.polkadot.io";

const endpoint = localStorage.getItem("endpoint");
if (!endpoint || typeof endpoint !== "string" || endpoint.indexOf("ws") !== 0) {
  localStorage.setItem("endpoint", default_endpoint);
}

const { ApiPromise, WsProvider } = require("@polkadot/api");
const wsProvider = new WsProvider(localStorage.getItem("endpoint"));
let api = ApiPromise.create({ provider: wsProvider });

export default api;
