import React from 'react';
import Series2List from '../components/Series2List';
import Series2Details from '../components/Series2Details';

class Series2 extends React.Component {
  constructor() {
    super()
    this.state = { friendsSeries: [] };
  }
  componentDidMount() {
    const url = 'http://api.tvmaze.com/shows/431/episodes';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200) {
        const friendsList = JSON.parse(request.responseText);
        this.setState({friendsSeries: friendsList});
        console.log('data', friendsList[0].name)
      }
    }
    request.send();
  }
  render() {
    return (
      <div>
        <h3> Series 2 </h3>
        <Series2List info={this.state.friendsSeries}/>
        <Series2Details />
      </div>
      )
  }
}


export default Series2;
  

