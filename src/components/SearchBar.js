import CardGame from "./CardGame";

const SearchBar = () => {

    const handleSelect = async(e) =>{
        console.log(e.target.value);
        try {
            let req = await fetch('data.json')
            let data = await req.json()
            
            let genreData = data.filter(game => game.genre == e.target.value)
            console.log(genreData);
            genreData.map(game => {
                return (<CardGame key={game.id} data={game}/>)
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <nav className="mb-3 searchBar">
            <div className="d-flex justify-content-between">
                <select className="" onChange={handleSelect} >
                    <option value="all">All</option>
                    <option value="MMORPG">MMORPG</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Social">Social</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Racing">Racing</option>
                    <option value="Sports">Sports</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="ARPG">ARPG</option>
                    <option value="Moba">Moba</option>
                    <option value="MMO">MMO</option>
                    <option value="Card">Card</option>
                    <option value="Battle Royale">Battle Royale</option>
                    <option value="Action RPG">Action RPG</option>
                </select>
                <form className="d-flex">
                    <input className="inpSearch" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar