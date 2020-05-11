// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component
////////////

const PageNumberItem = ({pageNumber, active, selectPage}) => {

    // Generate the listItem as active or not
    let listItem = '';

    // Format the page number correctly
    let pageNumberText;
    if(pageNumber < 10) {
        pageNumberText = `0${pageNumber.toString()}`
    } else {
        pageNumberText = pageNumber.toString()
    }

    // Choose the right  listItem to return
    if(active) {
        listItem = <li className="page-item page-number"><div className="page-link bg-info text-white" onClick={() => selectPage(pageNumber)}>{pageNumberText}</div></li>
    } else {
        listItem = <li className="page-item page-number"><div className="page-link text-secondary" onClick={() => selectPage(pageNumber)}>{pageNumberText}</div></li>
    }

    return (
        <div>
            {listItem}
        </div>

    )
};


PageNumberItem.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
};

// Export
/////////

export default PageNumberItem;

