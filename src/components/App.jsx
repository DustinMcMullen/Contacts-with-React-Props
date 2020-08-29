import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="123-456-7890"
        email="b@singleladies.com"
      />
      <Card
        name="Nas"
        image="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTIwNjA4NjMzNjkyMzI1Mzg4/nas-507692-1-402.jpg"
        phone="098-765-4321"
        email="nastynas@illmatic.com"
      />
      <Card
        name="John Wayne"
        image="https://pmcvariety.files.wordpress.com/2020/06/john-wayne.jpg"
        phone="111-222-3333"
        email="Marion@westerns.com"
      />
    </div>
  );
}

export default App;
