import React from 'react';
import Series1List from '../components/Series1List';
import Series1Details from '../components/Series1Details';


class Series1 extends React.Component{
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


  render(){
    return(
      <div>
        <h3> Series 1 </h3>
        <Series1List info={this.state.friendsSeries}/>
        <Series1Details />
      </div>
      )

    }
}

export default Series1;
