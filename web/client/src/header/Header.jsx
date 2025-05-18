import { useState } from "react";

function Header() {
    const [searchValue, setSearchValue] = useState("");

    function searchForWord(e) {
        if (e.key === "Enter") {
            console.log(e.target.value.toLowerCase());
        }
    }

    return (
        <header>
            <h1>English Dictionary</h1>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} onKeyUp={searchForWord}/>
        </header>
    );
}

export default Header;
