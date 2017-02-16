import React from 'react';
import Home from './Home.jsx';
import Series2 from '../containers/Series2.jsx';
import Series1 from '../containers/Series1.jsx';
import Series3 from '../containers/Series3.jsx';

import {Link} from 'react-router';

class Main extends React.Component {
  
  render() {
    return (
      <div>
        <h4>Main App</h4>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/series1">Series1</Link>
          </li>
          <li>
          <Link to="/series2">Series2</Link>
          </li>
          <li>
          <Link to="/series3">Series3</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

export default Main;