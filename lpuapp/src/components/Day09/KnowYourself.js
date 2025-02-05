import React, { useState } from "react";

function KnowYourself() {
  const [userData, setUserData] = useState({});

  const handleInputData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
        e.preventDefault();
  }

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h3 style={{textAlign : "center"}}>Know Yourself</h3>
      <form style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
        Which is your favourite food? :{" "}
        <input type="text" onChange={handleInputData} name="food" />
        <br />
        Mention any 3 hobbies :{" "}
        <input type="text" name="hobbies" onChange={handleInputData} />
        <br />
        When do you fell happy? :{" "}
        <input type="text" name="happy" onChange={handleInputData} />
        <br />
        When do you get wild? :{" "}
        <input type="text" name="wild" onChange={handleInputData} />
        <br />
        Any one movie that you liked the most :{" "}
        <input type="text" name="movie" onChange={handleInputData} />
        <br />
        Help me provide a best place to visit nearby :{" "}
        <input type="text" name="place" onChange={handleInputData} />
        <br />
        Who is your favourite cricket player? :{" "}
        <input type="text" name="cricket" onChange={handleInputData} />
        <br />
        Which is your favourite subject? :{" "}
        <input type="text" name="subject" onChange={handleInputData} />
        <br />
        Who is your guide? :{" "}
        <input type="text" name="guide" onChange={handleInputData} />
        <br />
        Mention your good father :{" "}
        <input type="text" name="father" onChange={handleInputData} />
        <br />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default KnowYourself;
