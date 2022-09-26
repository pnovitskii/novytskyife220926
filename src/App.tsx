import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Left from './components/left/Left';
import Right from './components/right/right';
import Center from './components/Center/Center';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className='content'>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
