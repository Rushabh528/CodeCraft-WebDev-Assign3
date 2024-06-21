/* eslint-disable react/prop-types */
import '../styles/Image.css'

function Image(props) {
    return props.url ? <img src={props.url} alt="Superhero" className="hero-image" /> : null;
}

export default Image;
