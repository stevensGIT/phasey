import React, {Component} from 'react';
import CryptoMarkets from './CryptoMarkets';
import CryptoMarketsMobile from './CryptoMarketsMobile';
import '../CryptoList.css';

export default class CryptoList extends Component {

  state = {
    currency_type: 'usd',
    url: 'https://api.cryptonator.com/api/full/',
    crypto_name: '',
    crypto_price: '',
    markets: [],
    crypto_currency: '',
    message: ''
  }

  changeCrypto = (e) => {
    var crypto_currency = e.target.value;
    fetch(this.state.url + crypto_currency + '-' + this.state.currency_type)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        crypto_name: data.ticker.base,
        crypto_price: data.ticker.price,
        markets: data.ticker.markets,
        crypto_currency: crypto_currency,
        message: data.ticker.markets.length > 0 ? '' : 'Not supported'
      })
    })
    .catch((e) => {
      console.log('No data...');
    })
  }

  changeCurrency = (e) => {
    var currency_val = e.target.value;
    fetch(this.state.url + this.state.crypto_currency + '-' + currency_val)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        crypto_name: data.ticker.base,
        crypto_price: data.ticker.price,
        markets: data.ticker.markets,
        currency_type: currency_val
      })
    })
    .catch((e) => {
      console.log('No data...');
    })
  }

  render(){
    return (
      <div id="Crypto" className="CryptoList" style={{display: 'none'}}>
      <div class="container" id="cryptoList">
      <div class="row">
      <div class="col-sm">
      <div class="card">
      <div class="card-header">Choose a cryptocurrency</div>
      <div class="card-body">
      <select class="btn btn-outline-secondary" id="cryptoList" onChange={this.changeCrypto}>
      <option value={'btc'}>Bitcoin</option>
      <option value={'eth'}>Ethereum</option>
      <option value={'ltc'}>Litecoin</option>
      <option value={'xrp'}>Ripple</option>
      <option value={'dash'}>Dash</option>
      <option value={'neo'}>Neo</option>
      </select>
      </div>
      </div>
      </div>
      <div class="col-sm">
      <p id="crypto-name" class="cryptoText">{this.state.crypto_name}</p>
      <p id="crypto-price" class="cryptoText">{this.state.crypto_price}</p>
      </div>
      <div class="col-sm">
      <div class="card">
      <div class="card-header">Convert currency</div>
      <div class="card-body">
      <select class="btn btn-outline-secondary" id="currencyList" onChange={this.changeCurrency}>
      <option value={'usd'}>USD</option>
      <option value={'gbp'}>GBP</option>
      <option value={'eur'}>EUR</option>
      </select>
      </div>
      </div>
      </div>
      </div>
      </div>
      <CryptoMarkets markets={this.state.markets}/>
      <CryptoMarketsMobile markets={this.state.markets}/>
      <p>{this.state.message}</p>
      </div>
    );
  }
}
