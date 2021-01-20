import React,{Component} from 'react';
import MenuButton from './MenuButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import Me from './Me';
import Home from './Home';
import Work from './Work';

export default class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <Router>
          <div>
            <MenuButton /><hr/>
            <Route exact path="/" component={Home} />
            <Route path="/Me" component={Me} />
            <Route path="/Work" component={Work} />
            <Route path="/Contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  }
}