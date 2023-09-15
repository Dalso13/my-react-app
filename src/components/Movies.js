import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movies({medium_cover_image, title, summary, genres,id}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title}/>
            <Link to={"/movie/"+id}> <h2>{title}</h2> </Link>
            <p>{summary}</p>
            <ul>
                {genres.map((g) =>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>);
}

Movies.prototype = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    id : PropTypes.number.isRequired
}
export default Movies;