import React from 'react';
import ReactDOM from 'react-dom';
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push, onValue, child, get} from "firebase/database";
import {useRef} from 'react';
import './style.css';

const login_header = <h2>Login:</h2>

/* Start HTML */

/*ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
); */

// ReactDOM.render(<NameForm />, document.getElementById('login'));


function LoginPage() {
  const titleInputRef = useRef();
  const navigate = useNavigate();
    const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const db = getDatabase();
    const postListRef = ref(db, 'users');
    const dbRef = ref(getDatabase());
    get(
      child(dbRef, 'users/')
        )
      .then(response => {
        
        return response.val();
      }).then(responseData => {
        for (const key of Object.entries(responseData)) {
            
            if(key[1].username == enteredTitle && key[1].password == enteredDescription){
                
                navigate("/", {replace:true});
                console.log("success")
                
                return;
                
            }
            
            
        }
        
        
      })
    
      
    

    
}
  return (
    <div className="HomePage"> 
      <div className = "typewriter">
        <div>
          <h1>Welcome, Bruins.</h1>
        </div>
      </div>

      <h2>Login:</h2> 
      
      <div className="login-form">
        <form onSubmit={submitHandler}>
          <label>
          Username:
          <input type="text" name="Username" required id="title" ref={titleInputRef}/>
          </label>
          <label>
          Password:
          </label>
          <input type="password" name="Password" required id="description" ref={descriptionInputRef}/>
          <input type="submit" value="Submit" onClick={redirectForum()}/>
        </form>
      </div>
    </div> 
    )
}

function redirectForum() {
  /* This function should be programmed to redirect to forum.js*/
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

//export default LoginPage;
