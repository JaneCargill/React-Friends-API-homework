import React from 'react';
import Series3List from '../components/Series3List';
import Series3Details from '../components/Series3Details';

class Series3 extends React.Component {
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
        <h3> Series 3 </h3>
        <Series3List info={this.state.friendsSeries}/>
        <Series3Details />
      </div>
      )
  }
}


export default Series3;