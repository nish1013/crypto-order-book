import axios from 'axios';
import { BINANCE_BASE_URL } from '../core/constants';

/**
 * Fetch order book data from Binance
 * @param symbol The trading pair symbol (e.g., BTCUSDT)
 * @param limit The number of bids and asks to return (default: 100)
 */
export async function fetchOrderBook(symbol: string, limit: number = 100) {
  try {
    const response = await axios.get(`${BINANCE_BASE_URL}/depth`, {
      params: { symbol, limit },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching order book:', error);
    throw error;
  }
}