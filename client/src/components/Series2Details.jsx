import React from 'react';


const Series2Details = props => {
    console.log('this details', props.season)
    // if ()
    return (
      <div>
        <p> S{props.season}E{props.episode}: {props.name} </p>
        <img src={props.image}></img>
      </div>
      )

    }

export default Series2Details;