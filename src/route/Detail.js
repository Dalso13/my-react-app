import {json, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movies from "../components/Movies";

function Detail() {
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({});
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
    }

    useEffect(()=>{
        getMovie();
    },[])

    return (<div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <img src={movies.medium_cover_image}/>
                    <h2>{movies.title}</h2>
                    <div>{movies.genres}</div>
                    <div>{movies.summary}</div>
                </div>
            }
    </div>);
}
export default Detail;