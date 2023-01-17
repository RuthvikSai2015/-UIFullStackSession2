import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Productcontainer from './components/products/Productcontainer';
import Content from './components/content/Content';
import Greet from './components/Greet';
import {Welcome} from './components/Greet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Header/>
      <Content/>
          <Productcontainer/>
          <Greet/>
          <Welcome/>
      <Footer/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
