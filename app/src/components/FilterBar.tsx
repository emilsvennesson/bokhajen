import './css/FilterBar.css';


interface FilterBarProps{
    programSortHandler: Function;
    conditionSortHandler: Function;
    courseSortHandler: Function;
    allFiltersHandler: Function;
}

/**
 * A bar with different filtering options
 * @param props programSortHandler : Handler executed when filter by program is clicked
 * @param props courseSortHandler : Executed when filter by course is clicked
 * @param props conditionSortHandler : Executed when filter by condition is clicked
 * @param props allFiltersHandler : Executed when all filters button is clicked
 * @returns FilterBar component
 */
 const FilterBar: React.FC<FilterBarProps> = ({ programSortHandler, conditionSortHandler, courseSortHandler, allFiltersHandler }) => {
    return ( 
    <div className="filterBar">
        {/*Small title */}
        <div className='filterBarSmallTitleContainer'>
            <p className="filterBarSmallTitle">Sort by</p>
        </div>

        {/* Buttons (This will have own made button components later)*/}
        <div className='filterButtons'>
            <button onClick={programSortHandler()}>Program</button>
            <button onClick={courseSortHandler()}>Course</button>
            <button onClick={conditionSortHandler()}>Condition</button>
        </div>
        <button onClick={allFiltersHandler()}>All Filters</button>
    </div> 
    );
};

export default FilterBar;