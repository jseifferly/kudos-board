import '../styles/Navagation.css'
import SearchBar from './SearchBar';
import Filters from './Filters';

export default function Navagation({ filter }) {

    return (
        <nav>
            <SearchBar />
            <Filters filter={filter}/>
        </nav> 
    );

}