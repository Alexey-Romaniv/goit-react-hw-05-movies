import PropTypes from 'prop-types';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { Form, Input, Button } from './SearchForm.styled.js';

Notiflix.Notify.init({
  width: '280px',
  position: 'left-top',
  distance: '100px',
  opacity: 1,
  fontSize: '16px',
  // ...
});

export const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const onFormReset = () => {
    setQuery('');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Enter movie name');
    }
    handleSubmit(query);
    onFormReset();
  };

  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Input
        value={query}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleSearchInput}
      />
      <Button>Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
