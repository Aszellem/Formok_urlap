import React, { useState } from "react";

function App() {
  const [teljesNev, setTeljesNev] = useState({
    vnev: "",
    knev: "",
    email: ""
  });
  function beallit(event) {
    const { value, name } = event.target;

    if (name == "vnev")
      setTeljesNev({
        vnev: value,
        knev: teljesNev.knev
      });
    else if (name == "knev")
      setTeljesNev({
        vnev: teljesNev.vnev,
        knev: value
      });
  }
  function torol() {
    setTeljesNev({ vnev: "", knev: "", email: "" });
  }
  return (
    <div className="container">
      <h1>
        Szia {teljesNev.vnev} {teljesNev.knev}{" "}
      </h1>
      <p>{teljesNev.email}</p>
      <form>
        <input
          onChange={beallit}
          name="vnev"
          placeholder="Vezetéknév"
          value={teljesNev.vnev}
        />
        <input
          onChange={beallit}
          name="knev"
          placeholder="Keresztnév"
          value={teljesNev.knev}
        />
        <input
          onChange={beallit}
          name="email"
          placeholder="E-mail cím"
          value={teljesNev.email}
        />
        <button type="button" onClick={torol}>
          Töröl
        </button>
      </form>
    </div>
  );
}

export default App;
