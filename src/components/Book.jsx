import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync(id));
  };

  return (
    <div className="bookContainer">
      <div>
        <h4 className="genre">{category}</h4>
        <h3 className="title">{title}</h3>
        <h4 className="author">{author}</h4>
        <button type="button">Comments</button>
        <button type="button" onClick={handleRemoveBook}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div>
        <h5>Progress</h5>
        <p>50%</p>
        <p>Completed</p>
      </div>
      <div>
        <h5>Current Chapter</h5>
        <p>Chapter 7</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
