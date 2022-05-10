import React, { useState } from "react";
import "./search-panel.css"


const SearchPanel = (props) => {
	const [term, setTerm] = useState("");

	const onUpdateSearch = (e) => {
		const term = e.target.value;
		setTerm({term});
		props.onUpdateSearch(term)
	}

	return ( 
		<input 
			className="form-control search-input"
			placeholder="Поиск по записям"
			type="text"
			onChange={onUpdateSearch}
			/>
	 );
}
 
export default SearchPanel;
