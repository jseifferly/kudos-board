import '../styles/Navagation.css'
import SearchBar from './SearchBar';
import Filters from './Filters';

export default function Navagation({ onFilter, onSearch }) {

    return (
        <nav>
            <SearchBar search={onSearch} filter={onFilter}/>
            <Filters filter={onFilter}/>
        </nav> 
    );

}