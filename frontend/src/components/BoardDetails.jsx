import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import BoardHeader from "./BoardHeader";
import NewCardButton from "./NewCardButton";
import CardList from "./CardList";
import Footer from "./Footer";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BoardDetails() {

    const params = useParams();
    const [board, setBoard] = useState();

    useEffect(() => {
        const fetchBoard = async () => {
            const BOARD_URL = new URL(`boards/${params.id}`,BASE_URL)
            await httpRequest(BOARD_URL, 'GET').then(board => {setBoard(board)});
        }
        fetchBoard()
    },[])

    return(
        <div>
            <BoardHeader />
            <NewCardButton />
            <CardList />
            <Link to='/'>Go Home</Link>
            <Footer />
        </div>
    );

}