import React from 'react';
import Card from '../Card/Card';
import './SearchList.css'

function SearchList(props) {
    return (
        <div className='figures'>
            {props.filteredFigures.map(figure => <Card figure={figure} />)}
        </div>
    );
}

export default SearchList;