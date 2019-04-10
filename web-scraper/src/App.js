import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LinkValidator from './components/LinkValidator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='heading'> Web Scraper </h1>
        <div className='input'>
          <TextField
            id="outlined-full-width"
            label="Link"
            placeholder="Please enter your link here"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" >
            Submit
      </Button></div>
        <LinkValidator />
      </div>
    );
  }
}

export default App;
