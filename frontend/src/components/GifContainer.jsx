import GifObject from "./GifObject";
import '../styles/GifContainer.css'

export default function GifContainer({ gifs }) {

    if(gifs.length){
        return (
            <div className="gif-container">
                {gifs.map((gif) => {
                    return <GifObject gif={gif} key={gif.id}/>
                })}
            </div>
        );
    }

    return <></>

}