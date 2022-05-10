import React, { useState } from "react";

import "./post-status-filter.css";

const PostStatusFilter = ({filter, onFilterSelect}) => {
  const [buttons, setButtons] = useState([
    { name: "all", label: "Все" },
    { name: "like", label: "Понравилось" },
  ]);
  
  return (
    <div className="btn-group">
      { buttons.map(({ name, label }) => {
			const active = filter === name;
			const clazz = active ? "btn-info" : "btn-outline-secondary";

			return (
				<button
					key={name}
					type="button" 
					className={`btn ${clazz}`} 
					onClick={() => onFilterSelect(name)}> 	
					{label} 
				</button>
				)
			})
		}
    </div>
  );
};

export default PostStatusFilter;
