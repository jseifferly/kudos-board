import { useParams, Link, redirect } from "react-router";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import BoardHeader from "./BoardHeader";
import NewCardButton from "./NewCardButton";
import CreateCardForm from "./CreateCardForm";
import CommentModal from "./CommentModal.jsx";
import CardList from "./CardList";
import Footer from "./Footer";
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BoardDetails() {

    const {darkMode} = useContext(darkModeContext)

    const params = useParams();
    const [board, setBoard] = useState();
    const [renderedCards, setRenderedCards] = useState([]);
    const [displayForm, setDisplayForm] = useState('modalHidden')
    const [displayComment, setDisplayComment] = useState('modalHidden')
    const [card, setCard] = useState(null)

    useEffect(() => {
        fetchBoard()
    },[])

    const fetchBoard = async () => {
        const BOARD_URL = new URL(`boards/${params.id}`,BASE_URL)
        await httpRequest(BOARD_URL, 'GET').then(board => {setBoard(board); setRenderedCards(board.cards.sort((a,b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1; 
        return new Date(b.pinnedAt) - new Date(a.pinnedAt);
    }))})};

    const showForm = () => {
        setDisplayForm('modalDisplay')
    }

    const closeForm = () => {
        setDisplayForm('modalHidden')
    }

    const showComments = async (id) => {
        const Card = renderedCards.find(card => card.id === id)
        await setCard(Card)
        setDisplayComment('modalDisplay')
    }

    const closeComments= () => {
        setDisplayComment('modalHidden')
    }

    const handleCreate = async (newData) => {
        const CARD_URL = new URL(`boards/${board.id}/cards`,BASE_URL);
        const newCard = await httpRequest(CARD_URL, 'POST', newData);
        setRenderedCards([...renderedCards,newCard]);
    }

    const handleDelete = async id => {
        setRenderedCards(renderedCards.filter(element => element.id !== id));
        const CARD_URL = new URL(`boards/${board.id}/cards/${id}`,BASE_URL)
        await httpRequest(CARD_URL,'DELETE')
    }

    const handleUpvote = async (id,newValue) => {
        setRenderedCards(
            renderedCards.map((card) => {
                if (card.id === id){
                    return {...card, votes: newValue}
                }
                return card;
            })
        )
        const CARD_URL = new URL(`boards/${board.id}/cards/${id}`,BASE_URL)
        const BODY = {votes : newValue};
        await httpRequest(CARD_URL,"PUT",BODY)
    }

    return(
        <div>
            <BoardHeader boardTitle={board ? board.title : 'Loading Title...'}/>
            <NewCardButton onOpen={showForm}/>
            <CreateCardForm boardID={board ? board.id : 0} modalDisplay={displayForm} onClose={closeForm} onCreate={handleCreate}/>
            <CommentModal modalDisplay={displayComment} card={card} onClose={closeComments} boardId={params.id}/>
            <CardList cards={board ? renderedCards : []} onDelete={handleDelete} onUpvote={handleUpvote} onOpen={showComments} boardId={params.id} onUpdate={fetchBoard}/>
            <div className={darkMode ? 'button-content dark' : 'button-content light'}>
                <Link to='/' className='go-home'>Go Home</Link>
            </div>
            <Footer />
        </div>
    );

}