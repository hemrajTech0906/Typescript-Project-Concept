import React, { useState } from "react";
import './Login.css'

interface ISTATE {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    email: "",
    password: "",
  });

  // const handleInputChange = (
  //     e: React.ChangeEvent<HTMLInputElement>
  //   ): void => {
  //     const { name, value } = e.target;
  //     setFormState((prevFormState) => ({
  //       ...prevFormState,
  //       [name]: value,
  //     }));
  //   };

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  //     event.preventDefault();
  //     console.log(state.user);
  //     alert("Login Success");
  //   };

  let handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(state);
    alert("Login Success");
  };
  return (
    <div className="lgn">
      <hr></hr>
      <h2  >Assign3From Handling</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
          className="inp"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
           
          />
        </label>
        <br />
        <label>
          Password:
          <input
          className="inp"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            
          />
        </label>
        <br />
        <button type="submit">Submit</button>

      </form>
      <div>
        <h2>{JSON.stringify(state)}</h2>
      </div>
    </div>
  );
};
//export default :React.FC
export default Login;
