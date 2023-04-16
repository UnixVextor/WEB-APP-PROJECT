import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const url = `http://localhost:5077/api/Users/username/${username}`;
      axios.get(url)
        .then(response => {
          const user = response.data;
          if(user.userName == username && user.password == password){
            window.alert('Login success');
          }
          else if(user.userName != username){
            window.alert('Login failed username is not valid');
          }
          else if(user.userName == username && user.password != password){
            window.alert('Login failed wrong password');
          }
        })
        .catch(error => {
          window.alert('Login failed username not valid');
        });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  };

const Registration = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const clear = () => {
        setUsername('');
        setPassword('');
        setPhonenumber('');
        setName('');
        setLastname('');
    }

    
    const handleSubmit = (event) => {
        const url = 'http://localhost:5077/api/Users';
        const data = {
                "userName": userName,
                "password": password,
                "phonenumber": phonenumber,
                "name": name,
                "lastname": lastname
            }
        axios.post(url,data)
        .then((result) =>{
            clear();
            window.alert('Completed Register');
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={userName} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Phonenumber:
        <input type="text" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Lastname:
        <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h2>Login</h2>
      <Login />
      <hr />
      <h2>Registration</h2>
      <Registration />
    </div>
  );
};

export default App;
