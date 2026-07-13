import urllib.request
import json
from typing import Dict, Any

def get_stock_price(ticker_symbol: str) -> Dict[str, Any]:
    """
    Fetches the current stock price and basic info using Yahoo Finance API directly to avoid large dependencies.
    """
    try:
        url = f"https://query1.finance.yahoo.com/v8/finance/chart/{ticker_symbol}?interval=1d"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            result = data['chart']['result'][0]
            meta = result['meta']
            
            return {
                "symbol": ticker_symbol,
                "current_price": round(meta['regularMarketPrice'], 2),
                "currency": meta['currency'],
                "previous_close": round(meta['chartPreviousClose'], 2)
            }
    except Exception as e:
        return {"error": f"Could not fetch data for {ticker_symbol}. {str(e)}"}
