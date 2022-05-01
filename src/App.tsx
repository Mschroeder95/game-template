import React from 'react';
import './App.css';
import { Game } from './game/game';

export class App extends React.Component {
  render () {
    return <div id='app-container'></div>
  }
  
  componentDidMount() {
    let appContainer = document.getElementById('app-container') as HTMLElement;
    Game.run(window.innerHeight, window.innerWidth, appContainer)
  }
}
