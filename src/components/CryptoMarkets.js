import React, {Component} from 'react';

class CryptoMarkets extends Component {
  render(){
    return(
      <div className="CryptoMarkets">
      <div id="markets">

      <ul class="btn btn">{this.props.markets.map((item, index) => (

        <div class="card">
        <div class="row">
        <div class="col-sm">
        <li class="list" key={'market'}>{item.market}</li>
        </div>

        <div class="col-sm">
        <li class="list" key={'price'}>{item.price}</li>
        </div>
        </div>
        </div>

      ))}
      </ul>
      </div>
      </div>
    );
  }
}

export default CryptoMarkets;
