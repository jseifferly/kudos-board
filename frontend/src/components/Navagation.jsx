import '../styles/Navagation.css'
import SearchBar from './SearchBar';
import Filters from './Filters';

export default function Navagation({ filter, search }) {

    return (
        <nav>
            <SearchBar search={search}/>
            <Filters filter={filter}/>
        </nav> 
    );

}