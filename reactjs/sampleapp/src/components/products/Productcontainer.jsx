import React from 'react'
import Productcart from './Productcart';
import Productadd from './Productadd';

export default function Productcontainer() {
  const products = [{ name: "Datacard", price: 3400 }, 
                    { name: "Laptop", price: 34000 }, 
                    { name: "Bag", price: 3500 }
                  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {
            products.map((product) =>
              <Productcart key={product.name} name={product.name} price={product.price} />
            )
          }
        </div>
        <div className="col-md-6">
          <Productadd />
          <Productadd />
          <Productadd />
        </div>
      </div>
    </div>
  )
}
