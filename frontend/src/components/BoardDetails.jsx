import { useParams } from "react-router";
import { Link } from "react-router"


export default function BoardDetails() {

    return(
        <div>
            <h1>Board Details</h1>
            <p>Cards go here</p>
            <Link to='/'>Go Home</Link>
        </div>
    );

}