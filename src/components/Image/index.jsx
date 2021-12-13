import './Image.css';

const Image = ( {src, alt} ) => {
    return(
        <div className="productImage">
            <img src={src} alt={alt} />
        </div>
    )
}

export default Image;