import ListGames from "../components/ListGames"
import SearchBar from "../components/SearchBar"
import '../style/home.css'

export default function Home(){
    return (
        <div className="container">
            <SearchBar/>
            <ListGames/>
        </div>
    )
}