import '../styles/SearchBar.css'

export default function SearchBar() {

    return (
        <div>
            <section className='search-bar'>
                <input type="text" placeholder='Search Boards...'/>
                <button>Search</button>
                <button>Clear</button>
            </section>
        </div>
    );

}