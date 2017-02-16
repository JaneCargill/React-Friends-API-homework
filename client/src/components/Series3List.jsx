import React from 'react';
import Series3Details from './Series3Details';


class Series3List extends React.Component{
 
       
  render(){

    var seas3 = this.props.info.filter(function(season) {
      return (season.season === 3 ) 
      });
    var s3 = seas3.map(function(episode, index) {
    
        return(
      <Series3Details name={episode.name} season={episode.season} episode={episode.number} image={episode.image.medium} key={index}></Series3Details>
      )
      // };
      // console.log('ep', episode.name)
    })
    
    
    return (
      <div>
        <h3> List </h3>
          {s3}
      </div>
      );

    }
}

export default Series3List;