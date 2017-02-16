import React from 'react';
import Series1Details from './Series1Details';


class Series1List extends React.Component{
 
       
  render(){

    var seas1 = this.props.info.filter(function(season) {
      return (season.season === 1 ) 
      });
    var s1 = seas1.map(function(episode, index) {
    
        return(
      <Series1Details name={episode.name} season={episode.season} episode={episode.number} image={episode.image.medium} key={index}></Series1Details>
      )
      // };
      // console.log('ep', episode.name)
    })
    
    
    return (
      <div>
        <h3> List </h3>
          {s1}
      </div>
      );

    }
}

export default Series1List;