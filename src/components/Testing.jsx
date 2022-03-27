import React from 'react';

function App2() {

  function handleChange(event) {
    
    alert(event.target.value);
  }
  
  return (
      <div>
      <h1>INSERTE NOMBRE</h1>
    <input name="firstName" onChange={handleChange} />
    </div>
  );
}

export default App2;