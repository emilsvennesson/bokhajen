import './css/FilterBar.css';


interface FilterBarProps{
    programSortHandler: Function;
    conditionSortHandler: Function;
    courseSortHandler: Function;
}

/**
 * A bar with different filtering options
 * @param props programSortHandler : Handler executed when filter by program is clicked
 * @param props courseSortHandler : Executed when filter by course is clicked
 * @param props conditionSortHandler : Executed when filter by condition is clicked
 * @returns FilterBar component
 */
 const FilterBar: React.FC<FilterBarProps> = ({ programSortHandler, conditionSortHandler, courseSortHandler }) => {
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
    </div> 
    );
};

export default FilterBar;