import React from 'react'
var resources = require('../../data/resources')

class ResourceGrid extends React.Component {

 helloWorld = () => {
    console.log(resources);
  }

  render(){
    return (
      <div>
        I am Grid.
        <button onClick={helloWorld()}>Resources</button>
      </div>
    )
  }
}
export default ResourceGrid
