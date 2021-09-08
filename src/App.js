import React from "react";


function Food({fav}) {
  return <h3>I love {fav}</h3>; 
}

function App() {
  return <div> Hello !

    <Food fav = "kimchi"/>
    <Food fav = "gyul"/>
    <Food fav = "maesae"/>
    <Food fav = "cheese"/>



  </div>;
}

export default App;

