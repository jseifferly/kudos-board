import '../styles/Filters.css'

export default function Filters({ filter }) {

    return (
        <section className='filters'>
            <button onClick={() => filter('all')}>All</button>
            <button onClick={() => filter('recent')}>Recent</button>
            <button onClick={() => filter('celebration')}>Celebration</button>
            <button onClick={() => filter('thanks')}>Thank you</button>
            <button onClick={() => filter('inspiration')}>Inspiration</button>
        </section>
    );

}