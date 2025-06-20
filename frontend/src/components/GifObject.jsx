export default function GifObject({ gif, onClick }) {
    
    return <img className="gif" src={gif.images.fixed_height.url} alt="Gif" onClick={onClick}/>

}