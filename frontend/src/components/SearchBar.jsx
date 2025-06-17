import '../styles/SearchBar.css'
import { useState } from 'react';

export default function SearchBar({ search }) {

    const [searchTerm, setSearchTerm] = useState('')

    const updateSearchTerm = async evt => {
        setSearchTerm(evt.target.value);
    }

    const handleKeyDown = evt => {
        if(evt.key === "Enter"){
            search(searchTerm);
        }
    }

    const handleClear = () => {
        setSearchTerm('')
        search('')
    }

    return (
        <div>
            <section className='search-bar'>
                <input type="text" placeholder='Search Boards...' value={searchTerm} onChange={updateSearchTerm} onKeyDown={handleKeyDown}/>
                <button onClick={() => search(searchTerm)}>Search</button>
                <button onClick={handleClear}>Clear</button>
            </section>
        </div>
    );

}