import React,{useState} from 'react';
import {useHistory} from "react-router-dom";


const Search = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()
    const handleInput = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const handleClick = () => {
        if (search.trim()) {
            history.push(`/search/${search}`)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }
    }

    return (
        <div>
            <input className="mx-4 input" placeholder="Search..." type="text" onChange={handleInput}  value={search} onKeyPress={handleKeyPress}/>
            <button className="header-btn btn-primary" onClick={handleClick}>Search</button>




        </div>
    );
};

export default Search;