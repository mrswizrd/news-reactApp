import React, {Component} from 'react';
import './App.css';
import Card from './component/Card';
import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';
import fifth from './images/5.jpg';
import sixth from './images/6.jpg';


class App extends Component {
  render(){
  return (
    <div className="App">

      <div>
        <h1>News Headlines</h1>
      <div className="newsHeadlines">
      <Card pic={first} text="Brexit is no longer funny." topic="Brits have reported being fed up of Brexit."/>
      <Card pic={second} text="The river is full" topic="This lady is watching the carnage."/>
      <Card pic={third} text="Fan art is boosting footballer's performance" topic="Artist Julia Quenzler drew this guy."/>
      </div>
      </div>
      <div>
        <h1>Sports Headlines</h1>
        <div className="sportsHeadlines">
      <Card pic={fourth} text="Football is boring." topic="But this guy thinks its fabulous."/>
      <Card pic={fifth} text="Cheeky football manager" topic="Rials up fans"/>
      <Card pic={sixth} text="Boxing news" topic="This man is a boxer hooray"/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
