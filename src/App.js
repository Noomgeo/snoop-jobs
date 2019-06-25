import React from 'react';
import logo from './logo.svg';
import './App.css';
import emailRegex from './emailRegex';
import goldRecord from './goldRecord.png';

const checkEmail = (email) => emailRegex.test(email);

class App extends React.Component {
  
  state = {
    rapName: '',
    albumSales: 1000,
    email: '',
    isEmailValid: false,
  }

  setRapName = (event) => {
    this.setState({
      rapName: event.target.value,
    })
  }

  setEmail = (event)=> {
    this.setState({
      email: event.target.value,
      isEmailValid: checkEmail(event.target.value),
    })
  }

  setAlbumSales = (event)=> {
    this.setState({
      albumSales: Math.max(0, event.target.value),
    })
  }

  done = (event)=> {
    console.log('Done applying');
  }

  render(){
    return (
      <div className='App'>
        <div className='form'>
          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.rapName} onChange={this.setRapName} />
              <span className='title'>Rap Name</span>
            </label>
          </div>

          <div className='card swanky-input-container'>
            <label>
              <input value={this.state.email} onChange={this.setEmail} />
              <span className='title'>Email</span>
              {
                (this.state.isEmailValid || this .state.email.length<1) ? (null) : (
                  <span className='email-invalid'>Please enter a valid email</span>
                  )
              }
            </label>
          </div>

          <div className='card swanky-input-container'>
            <label>
              <input type='number' step={100000} value={this.state.albumSales} onChange={this.setAlbumSales} />
              <span className='title'>Album Sales</span>
            </label>
            <div className='goldRecords'>
              {
                [1,2,3,4]
                .filter(x => x*1000000 < this.state.albumSales)
                .map(n => (
                  <div className='goldRecord' key={n}>
                    <img src={goldRecord}/>
                  </div>
                    ))
              }
            </div>
          </div>

          <div className='done-container'>
            <button className='done-button' onClick={this.done}> Done </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
