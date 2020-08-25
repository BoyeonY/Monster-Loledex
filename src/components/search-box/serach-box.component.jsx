import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className = 'serach'
        type = 'search'
        //dynamic way
        placeholder = {placeholder}
        //dynamic way
        onChange={handleChange}
        // onChange={e => this.setState({searchField: e.target.value})}
    />
)
