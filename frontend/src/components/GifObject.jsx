export default function GifObject({ gif }) {
    
    return <img className="gif" src={gif.images.fixed_height.url} alt="Gif" />

}