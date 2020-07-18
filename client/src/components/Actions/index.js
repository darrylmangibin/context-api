import React from "react";

const Actions = () => {
	return (
		<div className="actions">
			<div className="actions__container">
				<input
					id="search-text"
					type="text"
					className="input"
					placeholder="Filter notes"
				/>
				<select id="filter-by" className="dropdown">
					<option value="byEdited">Sort by last edited</option>
					<option value="byCreated">Sort by recently created</option>
					<option value="alphabetical">Sort alphabetically</option>
				</select>
			</div>
		</div>
	);
};

export default Actions;
