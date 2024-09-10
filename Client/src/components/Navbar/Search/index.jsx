// import { BiSearchAlt } from "react-icons/bi";
import {BiSearchAlt} from '../icons'; 
// import { useState } from "react";
import { useRef } from "react";
  const Search = () => {
    const inputRef = useRef(null);
    const handleSearch = () => {
        if (inputRef.current.value === "") inputRef.current.focus();
        else alert("Searching.....");
      };
    
    return (
      <div>
        <div style={{position:"relative",display:'flex',flexDirection:'row',alignItems:'center'}}>
            <BiSearchAlt
              onClick={handleSearch}
              style={{
                position: "absolute",
                paddingRight: "0.5rem",
                top: "40%",
                color: "grey",
                left: "0.5rem",
                transform: "translateY(-50%)",
                fontSize: "1.5em",
              }}
            />
            <input
              type="text"
              ref={inputRef}
              placeholder="Search the products..."
              style={{
                width: "40em",
                padding: "1rem 3rem",
                borderRadius: "0.5rem",
                border: "1px solid #e8ebe9",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
      </div>
    )
  }
  
  export default Search