import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
 import Productcontainer from './components/products/Productcontainer';
// import Content from './components/content/Content';
// import Greet from './components/Greet';
// import {Welcome} from './components/Greet';
// import Tracecomponent from './components/TraceComponent/Tracecomponent';
import Button from './components/TraceComponent/Button';
import Home from './components/Home';
// import Message from './components/content/Message';
// import Useeffecthook from './components/content/Useeffecthook';
// import Lifecycle from './components/content/Lifecycle';
// import Counter from './components/header/Counter';
// import Productadd from './components/products/Productadd';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sampleData = {
  componentname: 'Trace',
  title: 'title2',
  name: 'name3'
}
const products = [{ name: "Datacard", price: 3400 },
{ name: "Laptop", price: 34000 },
{ name: "Bag", price: 3500 }
]
root.render(
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
         <Route path="/" element = {<Button />}/>
         <Route path="/products" element={<Productcontainer products={products} name="react" intValue={1} sum={1+2}/>}/>
         <Route path="/home" element = {<Home/>}/>
         
      </Routes>
    </BrowserRouter>
    {/* <Content name="Class" value="Component Props" /> */}
    {/* <Message/> */}
    {/* <Useeffecthook/> */}
    {/* <Counter/>
      <Productadd/> */}
    {/* <Productcontainer products={products} name="react" intValue={1} sum={1+2} /> */}
    {/* <Productcontainer products={products}/> */}
    {/* <Tracecomponent {...sampleData}/> */}
    {/* <Tracecomponent componentname={sampleData.componentname} title={sampleData.title} name={sampleData.name}/> */}
    {/* <Tracecomponent  title="title 2" name="name 3" number = {1} showTitle/> */}
    {/* <Greet isLoggedIn={false}/>
          <Welcome/> */}
    {/* <Button/> */}
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
