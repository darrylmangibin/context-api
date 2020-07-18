import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const NoteItems = ({ note }) => {
  return (
		<Link to={`/edit/${note._id}`} className="list-item">
			<p className="list-item__title">{note.title}</p>
			<p className="list-item__subtitle">{`Last edited ${moment(note.updatedAt).fromNow()}`}</p>
		</Link>
	);
}

export default NoteItems;