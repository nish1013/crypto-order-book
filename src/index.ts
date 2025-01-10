import { fetchOrderBook, fetchRecentTrades } from './api/binance';
import { BTCUSDT } from './core/constants';

async function main() {
  const orderBook = await fetchOrderBook(BTCUSDT);
  console.log('OrderBook', orderBook);

  const recentTrades = await fetchRecentTrades(BTCUSDT);
  console.log('RecentTrades', recentTrades);
}

main().catch(console.error);
