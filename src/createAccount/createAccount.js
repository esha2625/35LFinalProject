import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const login_header = <h2>Login:</h2>

/* Start HTML */

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);

ReactDOM.render(<NameForm />, document.getElementById('login'));


function HomePage() {
  return (
    <div className="HomePage"> 
      <div className = "typewriter">
        <div>
          <h1>Ready to Confess?</h1>
        </div>
      </div>

      <h2>Login:</h2> 
      
      <div className="login-form">
        <form>
          <label>
          Username:
          <input type="text" name="Username"/>
          </label>
          <label>
          Password:
          </label>
          <input type="password" name="Password"/>
          <button onclick="redirectCreateAccount()">Create Account</button>
        </form>
      </div>

      <div className="footer">
          Footer
      </div>
    </div> 
    )
}

function redirectCreateAccount() {
  /* This function should be programmed to redirect to index.js*/
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}