// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageNumbers from './page-numbers/PageNumbers';
import PageControls from "./page-controls/PageControls";


// Component
////////////

const Pagination = ({ data, decrementPage, incrementPage, setPageEnd, setPageBegin, selectPage }) => {

    let paginationContent = '';

    // Hide the controls when there is no data
    if (!data) {
        return (
            <div>{paginationContent}</div>
        )
    }

    // Generate the pagination content
    paginationContent = (
        <div className="mb-2">
            <PageNumbers
                currentPage={data.current_page}
                pages={data.last_page}
                selectPage={selectPage}
            />
            <PageControls
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                setPageBegin={setPageBegin}
                setPageEnd={setPageEnd}
                selectPage={selectPage}/>
        </div>
    );

    return (
        <div>
            {paginationContent}
        </div>
    )
};


// Prop types for the component
Pagination.propTypes = {
    data: PropTypes.object,
    setPageEnd: PropTypes.func.isRequired,
    setPageBegin: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    decrementPage: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired
};


// Export
/////////

export default Pagination;
