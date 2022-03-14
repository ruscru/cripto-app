import { 
    AppBar, 
    Container, 
    createTheme, 
    makeStyles, 
    MenuItem, 
    Select, 
    ThemeProvider, 
    Toolbar, 
    Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from "../CryptoContex";

const useStyles = makeStyles(() => ({
    title : {
        flex: 1,
        color : "#0275C5",
        fontFamily : "Montserrat",
        fontWeight : "bold",
        cursor : "pointer",
    }
}))

const Header = () => {

    const classes = useStyles();
    const history = useNavigate();
    const { currency, setCurrency } = CryptoState();    

    const darkTheme = createTheme({
        palette : {
            primary: {
                main : "#fff",
            },
            type : "dark",
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                    <Toolbar>
                        <Typography 
                        onClick={()=> history("/")}
                        className={classes.title}>Crypto Hunter</Typography>
                        <Select 
                            variant="outlined" 
                            style={{
                                widht: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            value = { currency }
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value='USD'>USD</MenuItem>
                            <MenuItem value='EUR'>EUR</MenuItem>
                        </Select>
                    </Toolbar>
            </Container>
        </AppBar>
      </ThemeProvider>
  );
};

export default Header;




