import { Button, Card, Grid, Typography } from "@material-ui/core"
import { withRouter } from "react-router-dom";

import style from "./style";

const CardMovieResult = ({ Poster, Title, Type, Year, imdbID, history }) => {
    const classes = style()

    const handleMovieDetail = () => {
        history.push(`/movie/${imdbID}`)
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Poster} className={classes.poster}/>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Type}</Typography>
                    <Typography>{Year}</Typography>
                    <Button 
                        color="primary" 
                        variant="contained"
                        onClick={handleMovieDetail}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(CardMovieResult);