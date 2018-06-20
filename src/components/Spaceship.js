
import React from 'react';

class Spaceship extends React.Component {
  render() {
  	return(
    <div>
    {this.props.name}
    {this.props.speed}
    {this.props.hasRockets}
    {this.props.colors}
    </div>
    )
  }
}

Spaceship.defaultProps = {
  name: "thing",
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};



export default Spaceship;