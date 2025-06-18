import { Link } from "react-router"
import { httpRequest } from "../utils/utils";

export default function BoardButtons({ id, onDelete }) {

    return(
        <div>
            <Link to='/boards'>View Board</Link>
            <button onClick={() => onDelete(id)}>Delete Board</button>
        </div>
    );

}