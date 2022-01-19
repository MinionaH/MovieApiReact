import react from "react";
import "./SearchBox.css"

const SearchBox = (props) => {
    return(
        <div>
            <input 
            className="inputBox"
            placeholder="Type To Search"
            value = {props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox;