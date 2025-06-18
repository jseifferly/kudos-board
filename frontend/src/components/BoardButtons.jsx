import { Link } from "react-router"

export default function BoardButtons() {

    return(
        <div>
            <Link to='/boards'>View Board</Link>
            <button>Delete Board</button>
        </div>
    );

}