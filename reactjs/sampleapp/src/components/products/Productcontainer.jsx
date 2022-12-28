import React from 'react'
import Productcart from './Productcart';
import Productadd from './Productadd';

export default function Productcontainer() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <Productcart name="Kumar" emailid="kumar@gmail.com"/>
                <Productcart name="Krishna" emailid="krishna@gmail.com"/>
            </div>
            <div className="col-md-6">
                <Productadd/>
            </div>
        </div>
    </div>
  )
}
