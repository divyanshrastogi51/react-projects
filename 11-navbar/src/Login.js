import React, { useState } from 'react';



function Login() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const handleSubmitClick = (e) => {
    e.preventDefault();
    alert('Hurray! you just logged in')
    setState({
      email: "",
      password: ""
    });
  }
  return (
    <>
      <div className="container">
        <div className="login">
          <form onSubmit={handleSubmitClick}>
            <h2>Login</h2>
            <div className="username">
              <input
                type="text"
                id="email"
                placeholder="Email..."
                value={state.email}
                onChange={handleChange}
                name="email"
              />
            </div>

            <div className="password">
              <input
                type="password"
                id="password"
                placeholder="Password..."
                value={state.password}
                onChange={handleChange}
                name="password"
              />
            </div>

            <input className="submit" type="submit" value="Login" />
          </form>

          {/* <Link to="/register">Create an account</Link> */}
        </div>
      </div>
    </>
  )
}

export default Login
