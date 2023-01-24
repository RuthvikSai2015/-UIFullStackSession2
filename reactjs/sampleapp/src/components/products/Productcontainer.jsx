import React from 'react'
import Productcart from './Productcart';
import Productadd from './Productadd';

export default function Productcontainer(props) {
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {
            props.products.map((product) =>
              // <Productcart key={product.name} name={product.name} price={product.price} />
              <Productcart key={product.name} {...product}/>
            )
          }
        </div>
        {props.name}
        <div className="col-md-6">
          <Productadd />
          <Productadd />
           <Productadd />
        </div>
      </div>
    </div>
  )
}
