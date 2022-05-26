import React from "react";

const SearchBox = (prop) => {
    return (
        <div>
            <input type="text" placeholder="Search" onChange={prop.searchChange}></input>
        </div>
    );
}

export default SearchBox;