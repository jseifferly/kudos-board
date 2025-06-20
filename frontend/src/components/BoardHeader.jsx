import '../styles/BoardHeader.css'

export default function BoardHeader({boardTitle}) {

    return (
        <header>
            <img src="../public/medal.svg" alt="" />
            <h1>Kudo Boards</h1>
            <h2>{boardTitle}</h2>
        </header>
    );

}