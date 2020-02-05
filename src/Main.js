import React from 'react';
const action = msg => () => console.log(msg);

const MainComponent = ({ name }) => (
  <div>
    <img src="https://source.unsplash.com/800x400?cities,nature" />
    <div>
      <h2>H2 Typography</h2>
    </div>
    <div>
      <button>{name}</button>
      <button>Button2</button>
      <button>Button3</button>
    </div>
  </div>
);

export default MainComponent;
