import '../styles/NewCardButton.css'

export default function NewCardButton({ onOpen }) {

    return (
        <div className='new-card-button'>
            <button onClick={onOpen}>Create A Card</button>
        </div>
    );
}