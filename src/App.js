import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function CheckboxExample() {
  const [checked, setChecked ] = React.useState(true)
  return(
    <div>
      <FormControlLabel 
        control={<Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
        />}
        label="Testing Checkbox"
      />
      
      

    </div>
  )
}

function App() {
  return (
    
    <div className="App">
    
      <header className="App-header">
      <CheckboxExample/>
      <ButtonGroup>
        <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="primary">Save</Button>
        <Button startIcon={<DeleteIcon/>} size="large" variant="contained" color="secondary">Discard</Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

