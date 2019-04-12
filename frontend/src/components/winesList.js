import React from 'react';
 
  // Create a 'Wine' component that renders a wine card
  const Wine = (props) => {
    return (
    <div className="card">
      <div>
        <img src={require('../images/wines/wine_' + props.id + '.jpg')} alt={props.name} width= "100%" height= "auto"/>
      </div>
      <h2>{ props.name }</h2>
      <p>{ props.desc }</p>
      <h3>Wine Profile</h3>
      <ul>
        <li><strong>Year:</strong> { props.year }</li>
        <li><strong>Country:</strong> { props.country }</li>
        <li><strong>Grape:</strong> { props.grape }</li>
        <li><strong>Alcohol:</strong> { props.alcohol }</li>
      </ul>
    </div>
    );
  }
  
  // Create a container component that iterates over the wine array 
  //    and renders a 'Wine' component for each object in the array 
  const WineList = (props) => {
    return (
      <div className="container">
        {props.wines.map( wine => 
          <Wine
            {...wine}
            key={wine.id}
          />      
        )}
      </div>
    );
  }

  export default WineList;