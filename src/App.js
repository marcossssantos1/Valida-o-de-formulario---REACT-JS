import React, { useState } from 'react';
import './style.css';
import { validEmail, validPassword } from "./utils/regex";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setInputPasswordErr(true);
    } else {
      setInputPasswordErr(false);
    }
  };

  return (
    <div>
      <h1>Validando form com regex</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {inputEmailErr && <p>Por favor digete um email valido!</p>}

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {inputPassordErr && <p>Por favor digite uma senha mais segura</p>}

      <button onClick={validate}>Validar</button>
    </div>
  );
}
