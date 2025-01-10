import { fetchOrderBook } from './api/binance';
import { BTCUSDT } from './core/constants';

async function main() {
  const orderBook = await fetchOrderBook(BTCUSDT);
  console.log(orderBook);
}

main().catch(console.error);
