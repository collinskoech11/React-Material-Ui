import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999',
    border:0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Text Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked ] = React.useState(true)
  return(
    <div>
      <FormControlLabel 
        control={<Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
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
      <ButtonStyled/>
      <TextField
        variant="outlined"
        color="secondary"
        type="email"
        label="time"
        placeholder="test@gmail.com"
      />
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

