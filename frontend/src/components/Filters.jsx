import '../styles/Filters.css'

export default function Filters({ filter }) {

    return (
        <section className='filters'>
            <button onClick={() => filter('all')}>All</button>
            <button onClick={() => filter('recent')}>Recent</button>
            <button onClick={() => filter('Celebration')}>Celebration</button>
            <button onClick={() => filter('Thank You')}>Thank you</button>
            <button onClick={() => filter('Inspiration')}>Inspiration</button>
        </section>
    );

}