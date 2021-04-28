import React from 'react';
import PropTypes from 'prop-types';


const ChordButton = ({chord,onclick}) => {
    
    return (
        <button className='chordButton' type='button' onClick={() => onclick(chord)} id={chord}>{chord}</button>
    )
    
}

ChordButton.propTypes = {
    chord: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired
}

export default ChordButton;