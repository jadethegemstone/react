import React, { useState, useEffect } from "react";

const Valorant = () => {
  const [agent, setAgent] = useState([]);
  const [number, setNumber] = useState(0);

  const getAgent = () => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => {
        const selectedAgent = data.data[number];
        setAgent(selectedAgent);
      });
    };

  const buttonClick = (num) => {
    setNumber(num);
  }

  const onSubmit = () => {
    if(number != null) {
      getAgent();
    }
  }
  
  return (
    <div>
      Select an Agent to see their icon, then press Submit
      <br />

      <button onClick={() => buttonClick(0)}> Gecko</button>
      <button onClick={() => buttonClick(1)}> Fade</button>
      <button onClick={() => buttonClick(2)}> Breach</button>
      <button onClick={() => buttonClick(3)}> Deadlock</button>
      <button onClick={() => buttonClick(4)}> Raze</button>
      <button onClick={() => buttonClick(5)}> Chamber</button>
      <button onClick={() => buttonClick(6)}> Kayo</button>
      <button onClick={() => buttonClick(7)}> Skye</button>
      <button onClick={() => buttonClick(8)}> Cypher</button>
      <button onClick={() => buttonClick(9)}> Sova</button>
      <button onClick={() => buttonClick(11)}> Killjoy</button>
      <button onClick={() => buttonClick(12)}> Harbor</button>
      <button onClick={() => buttonClick(13)}> Viper</button>
      <button onClick={() => buttonClick(14)}> Phoenix</button>
      <button onClick={() => buttonClick(15)}> Astra</button>
      <button onClick={() => buttonClick(16)}> Brimstone</button>
      <button onClick={() => buttonClick(17)}> Iso</button>
      <button onClick={() => buttonClick(18)}> Neon</button>
      <button onClick={() => buttonClick(19)}> Yoru</button>
      <button onClick={() => buttonClick(20)}> Sage</button>
      <button onClick={() => buttonClick(21)}> Reyna</button>
      <button onClick={() => buttonClick(22)}> Omen</button>
      <button onClick={() => buttonClick(23)}> Jett</button>
      <br />
      <button type="button" onClick={onSubmit}>Submit</button>
      <br />

      {agent && (
        <div>
          <br />
          <img src={agent.displayIcon} />
          <br />
          Agent Name: {agent.displayName}
          <br />
          Developer Name: {agent.developerName}
          <br />
          Description: {agent.description}

        </div>
      )}

    </div>
  );
};

export default Valorant;