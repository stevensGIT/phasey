import React, {Component} from 'react';

class CryptoMarketsMobile extends Component {
  render (){
    return (
      <div className="CryptoMarketsMobile">
      <div class="container">
      <div class="card">
      <div class="card-header text-left">Market Price</div>
      <div class="card-body">
      <ul>{this.props.markets.map((item, index) => (
        <div class="row">
        <div class="col-sm">
        <li class="list text-left breadcrumb" key={'market'}>Market: {item.market} Price: {item.price}</li>
        </div>
        </div>
      ))}
      </ul>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default CryptoMarketsMobile;
