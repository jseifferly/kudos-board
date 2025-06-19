import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import BoardHeader from "./BoardHeader";
import NewCardButton from "./NewCardButton";
import CreateCardForm from "./CreateCardForm";
import CardList from "./CardList";
import Footer from "./Footer";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BoardDetails() {

    const params = useParams();
    const [board, setBoard] = useState();
    const [renderedCards, setRenderedCards] = useState([]);
    const [displayForm, setDisplayForm] = useState('modalHidden')

    useEffect(() => {
        const fetchBoard = async () => {
            const BOARD_URL = new URL(`boards/${params.id}`,BASE_URL)
            await httpRequest(BOARD_URL, 'GET').then(board => {setBoard(board); setRenderedCards(board.cards)});
        }
        fetchBoard()
    },[])

    const showForm = () => {
        setDisplayForm('modalDisplay')
    }

    const closeForm = () => {
        setDisplayForm('modalHidden')
    }

    const handleCreate = async (newData) => {
        const CARD_URL = new URL(`boards/${board.id}/cards`,BASE_URL);
        const newCard = await httpRequest(CARD_URL, 'POST', newData);
        setRenderedCards([...renderedCards,newCard]);
    }


    return(
        <div>
            <BoardHeader boardTitle={board ? board.title : 'Loading Title...'}/>
            <NewCardButton onOpen={showForm}/>
            <CreateCardForm boardID={board ? board.id : 0} modalDisplay={displayForm} onClose={closeForm} onCreate={handleCreate}/>
            <CardList cards={board ? renderedCards : []}/>
            <Link to='/'>Go Home</Link>
            <Footer />
        </div>
    );

}