// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import PageNumberItem from './PageNumberItem';
import PageNumberDots from './PageNumberDots';


// Component
////////////

const PageNumbers = ({pages, currentPage, selectPage}) => {

    // Loop through the pages & create the page numbers
    // Redesign the page numbers according to the current page
    let numbersLayout = '';

    // Functionality to generate a short list
    const generateShortList = () => {
        let numberItems = [];
        for (let i = 1; i <= Math.round(pages); i++ ) {
            const activePage = i === currentPage;
            numberItems.push(<PageNumberItem key={i} pageNumber={i} active={activePage} selectPage={selectPage}/>)
        }

        numbersLayout = (
            <ul className="pagination ml-auto">
                {numberItems}
            </ul>
        )
    };

    // Functionality to generate a long list
    const generateLongList = () => {
        let numberItems = [];
        if (currentPage < 8) {
            for (let i = 1; i <= 11; i++) {
                const activePage = i === currentPage;
                numberItems.push(<PageNumberItem key={i} pageNumber={i} active={activePage} selectPage={selectPage}/>)
            }

            numbersLayout = (
                <ul className="pagination ml-auto">
                    {numberItems}
                    <PageNumberDots />
                    <PageNumberItem key={pages} pageNumber={pages} active={pages === currentPage} selectPage={selectPage} />

                </ul>
            )
        }

        if (currentPage >= 8 && (pages - currentPage) >= 7 ) {
            const middleLeft = [];
            for (let i = currentPage - 4; i <= currentPage - 1; i++) {
                const activePage = i === currentPage;
                middleLeft.push(<PageNumberItem key={i} pageNumber={i} active={activePage} selectPage={selectPage}/>)
            }
            const middleRight= [];
            for (let i = currentPage + 1; i <= currentPage + 4; i++) {
                const activePage = i === currentPage;
                middleRight.push(<PageNumberItem key={i} pageNumber={i} active={activePage} selectPage={selectPage}/>)
            }

            numbersLayout = (
                <ul className="pagination ml-auto">
                    <PageNumberItem key={1} pageNumber={1} active={currentPage === 1} selectPage={selectPage} />
                    <PageNumberDots />
                    {middleLeft}
                    <PageNumberItem key={currentPage} pageNumber={currentPage} active={true} selectPage={selectPage} />
                    {middleRight}
                    <PageNumberDots />
                    <PageNumberItem key={pages} pageNumber={pages} active={pages === currentPage} selectPage={selectPage} />

                </ul>
            )
        }

        if (currentPage >= 8 && (pages - currentPage) < 7 ) {
            let numberItems = [];
            for (let i = pages - 10; i <= pages; i++) {
                const activePage = i === currentPage;
                numberItems.push(<PageNumberItem key={i} pageNumber={i} active={activePage} selectPage={selectPage}/>)
            }

            numbersLayout = (
                <ul className="pagination ml-auto">
                    <PageNumberItem key={1} pageNumber={1} active={currentPage === 1} selectPage={selectPage} />
                    <PageNumberDots />
                    {numberItems}
                </ul>
            )
        }
    };

    // Display a maximum row of 13 places
    if (pages <= 13) {
        generateShortList();
    } else {
        generateLongList();
    }


    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                {numbersLayout}

            </nav>
        </div>
    )
};


// Prop types for the component
PageNumbers.propTypes = {
    pages: PropTypes.number,
    currentPage: PropTypes.number,
    selectPage: PropTypes.func.isRequired
};


// Export
/////////

export default PageNumbers;
