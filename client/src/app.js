import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'
import Home from './components/Home.jsx';
import Series2 from './containers/Series2.jsx';
import Series1 from './containers/Series1.jsx';
import Series3 from './containers/Series3.jsx';
// import Series3 from './components/Series3.jsx';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="series2" component={Series2}/>
    <Route path="series1" component={Series1} />
    <Route path="series3" component={Series3} />
    </Route>
    </Router>,
    document.getElementById('app')
  );
}
