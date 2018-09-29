import React, {Component} from 'react';
import '../CryptoMarkets.css';

class CryptoMarkets extends Component {
  render(){
    return(
      <div className="CryptoMarkets">
      <div class="container">
      <div class="row">
      <div class="col-sm">
      <div class="card">
      <div class="card-header text-left">Market</div>
      <div class="card-body">
      <ul>{this.props.markets.map((item, index) => (
        <div class="row">
        <div class="col-sm">
        <li class="list text-left breadcrumb" key={'market'}>{item.market}</li>
        </div>
        </div>
      ))}
      </ul>
      </div>
      </div>
      </div>
      <div class="col-sm">
      <div class="card">
      <div class="card-header text-left">Price</div>
      <div id="markets">
      <div class="card-body">
      <ul>{this.props.markets.map((item, index) => (
        <div class="row">
        <div class="col-sm">
        <li class="list text-left breadcrumb" key={'price'}>{item.price}</li>
        </div>
        </div>
      ))}
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>




    );
  }
}

export default CryptoMarkets;
