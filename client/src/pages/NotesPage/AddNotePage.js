import React, { Fragment } from "react";

import NoteForm from '../../components/Form/NoteForm';
import Navigation from '../../components/Actions/Navigation';

const AddNotePage = () => {
	return (
    <Fragment>
      <Navigation />
      <NoteForm />
    </Fragment>
  )
};

export default AddNotePage;
