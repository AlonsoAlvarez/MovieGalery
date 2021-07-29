import React, { useState } from "react";
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core";

import { MovieIcon } from "../../icons";
import styles from './style'

const PageHome = ({ history }) => {
    const [search, setSearch] = useState('')
    const classes = styles()

    const handleSearchClick = (event) => {
        history.push(`/results?movieName=${search}`)
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>
                            Bienvenido!
                        </Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField
                    value={search}
                    placeholder="Buscar..."
                    className={classes.textFieldSearch}
                    onChange={(e) => setSearch(e.target.value)}/>
                <Grid className={classes.buttonsContainer}>
                    <Button 
                        variant="contained"
                        onClick={(_) => setSearch('')}>Limpiar</Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        className={classes.searchButton}
                        onClick={handleSearchClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    );
};

export default PageHome;
