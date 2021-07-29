import { Container, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { apiCall } from "../../api"
import Loading from "../../components/Loading"

const PageMovieDetail = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [details, setDetails] = useState(null)

    const movieId = match.params.id

    useEffect(() => {
        const getDetail = async () => {
            const results = await apiCall(`&i=${movieId}`, null, null, 'GET')
            console.log(results);
            setDetails(results.data)
            setIsLoading(false)
        }
        getDetail()
    }, [movieId])

    const showDetails = () => {
        return (
            <div>
                <Typography variant="h3">{details.Title}</Typography>
                <img src={details.Poster} alt={details.Poster}/>
                <Typography><strong>Actors: </strong>{details.Actors}</Typography>
                <Typography><strong>Director: </strong>{details.Director}</Typography>
                <Typography><strong>Country: </strong>{details.Country}</Typography>
                <Typography><strong>Rated: </strong>{details.Rated}</Typography>
                <Typography><strong>Awards: </strong>{details.Awards}</Typography>
                <Typography><strong>Plot: </strong>{details.Plot}</Typography>
            </div>
        )
    }

    return (
        <Container>
            {isLoading? <Loading size={100}/> 
                : !details? <h2>Error</h2> 
                : showDetails()}
        </Container>
    )
}

export default PageMovieDetail