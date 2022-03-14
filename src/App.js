import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Paper  from '@material-ui/core/Paper';
import  Grid  from '@material-ui/core/Grid';

import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6BBB, #FFBE53)',
    border:0,
    fontWeight: 'bold',
    borderRadius: 15,
    marginBottom:15,
    color: 'white',
    padding: '15px 20px',
  }
})

const theme = createTheme({
  typography:{
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[500],
    }
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
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <div className="App">
        
          <header className="App-header">
          <Typography variant="h2">Welcome to MUI</Typography>
          <Typography variant="subtitle1">Learn How to use Material ui</Typography>
          <ButtonStyled/>
          <TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="time"
            placeholder="test@gmail.com"
          />
          <Grid container>
            <Grid item>
              <Paper style={{ height:75, width:50, }}/>
            </Grid>
          </Grid>
          <CheckboxExample/>
          <ButtonGroup>
            <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="primary">Save</Button>
            <Button startIcon={<DeleteIcon/>} size="large" variant="contained" color="primary">Discard</Button>
          </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;

