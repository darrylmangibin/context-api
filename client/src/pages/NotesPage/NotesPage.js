import React, { Fragment } from "react";

import Actions from '../../components/Actions';
import NoteLists from '../../components/Notes/NotesList';

const NotesPage = () => {
	return (
    <Fragment>
      <Actions />
      <NoteLists />
    </Fragment>
  )
};

export default NotesPage;
