import { makeStyles } from "@material-ui/core";

const centerStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centerStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centerStyleObj
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centerStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    buttonsContainer: {
        marginTop: '0.5rem'
    },
    searchButton: {
        marginLeft: '0.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
})