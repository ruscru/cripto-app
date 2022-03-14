import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from "./Carousel";

const useStyles = makeStyles (() => ({
    banner : {
        backgroundImage : "url(./bck_blockchain.png)",
    },
    bannerContent : {
        height : 400,
        display : "flex",
        flexDirection : "column",
        paddingTop : 10,
        justifyContent : 'space-around',
    },
    tagline: {
        display: "flex",
        height: "30%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "40%",
        display: "flex",
        alignItems: "center",
      },
}));

const Banner = () => {
    const classes = useStyles();

  return (
        <div className={classes.banner}>
           <Container className={classes.bannerContent}>
               <div className={classes.tagline}>
                <Typography
                    variant="h3"
                    style={{
                        fontWeight: "bold",
                        marginBottom: 10,
                        fontFamily: "Montserrat",
                    }}
                >
                    Crypto Hunter
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    }}
                >
                    Get all the Info regarding your favorite Crypto Currency
                </Typography>
               </div>
               <Carousel />
           </Container> 
        </div>
    );
};

export default Banner;
