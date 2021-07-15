import React from 'react';
import Aux from './Auxiliary/Auxiliary';
import ChooseFunnel from './components/chooseFunnel/ChooseFunel';
// import ChooseThemes from './components/chooseThemes/ChooseThemes';
import './App.css';

const App = (props) => (
  <Aux>
    {/* <ChooseThemes /> */}
    <ChooseFunnel />
  </Aux>
);

export default App;
