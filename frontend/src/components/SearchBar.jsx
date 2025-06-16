import '../styles/SearchBar.css'

export default function SearchBar() {

    return (
        <div>
            <section>
                <input type="text" placeholder='Search Boards...'/>
                <button>Search</button>
                <button>Clear</button>
            </section>
        </div>
    );

}