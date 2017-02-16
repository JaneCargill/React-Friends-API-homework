import React from 'react';
import Series2Details from './Series2Details';


class Series2List extends React.Component{
 
       
  render(){

    var seas2 = this.props.info.filter(function(season) {
      return (season.season === 2 ) 
      });
    var s2 = seas2.map(function(episode, index) {
    
        return(
      <Series2Details name={episode.name} season={episode.season} episode={episode.number} image={episode.image.medium} key={index}></Series2Details>
      )
      // };
      // console.log('ep', episode.name)
    })
    
    
    return (
      <div>
        <h3> List </h3>
          {s2}
      </div>
      );

    }
}

export default Series2List;