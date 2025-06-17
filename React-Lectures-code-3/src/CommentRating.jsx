import { useState } from "react";
import Comments from "./Comment";
import { useFormik } from 'formik';



const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required! Please enter username';
  }
  if (!values.comment) {
    errors.comment = 'Required! Please enter comment';
  }
  if (!values.rating) {
    errors.rating = 'Required! Please provide rating';
  } else if (values.rating < 1 || values.rating > 3) {
    errors.rating = 'Rating must be between 1 and 3';
  }
  return errors;
};

export default function CommentRating({ addNewComments }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
      rating: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComments(values);  // send to parent
      resetForm();             // clear form
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Give a Comment!</h1>

        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && <p style={{ color: 'red' }}>{formik.errors.username}</p>}

        <br /><br />

        <textarea
          placeholder="Comment"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        {formik.errors.comment && <p style={{ color: 'red' }}>{formik.errors.comment}</p>}

        <br /><br />

        <input
          type="number"
          placeholder="Rating"
          name="rating"
          min={1}
          max={3}
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        {formik.errors.rating && <p style={{ color: 'red' }}>{formik.errors.rating}</p>}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
