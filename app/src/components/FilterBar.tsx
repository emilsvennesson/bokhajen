import { Box, Button, Grid, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";

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
    <Grid
        component="div"
        container
        flexDirection="row"
        alignItems="center"
        height="100px"

        sx={{
            borderBottom: 1,
            borderColor: "grey",
            width: "95%"
        }}
    >
        {/*Small title */}
        <Typography
            variant="h6"
            sx={{marginLeft: 10, marginRight: 10}}
        >
        Sort by 
        </Typography>
        {/* <div className='filterBarSmallTitleContainer'>
            <p className="filterBarSmallTitle">Sort by</p>
        </div> */}

        {/* Buttons (This will have own made button components later)*/}
        <Grid 
            item
            flexGrow={4}
        >
            <Button 
            variant="contained" 
            onClick={programSortHandler()}
            sx={{       
                width: 130,
                height: 50,
                marginRight: 2
            }}

            >Program</Button>
            <Button 
            variant="contained" 
            onClick={courseSortHandler()}
            sx={{       
                width: 130,
                height: 50,
                marginRight: 2
            }}

            
            >Course</Button>
            <Button 
            variant="contained" 
            onClick={conditionSortHandler()}

            sx={{       
                width: 130,
                height: 50,
                marginRight: 2
            }}
            
            >Condition</Button>
        </Grid>
        <Button
        variant="contained"
        sx={{       
            width: 130,
            height: 50,
            marginRight: 2
        }}
        
        onClick={allFiltersHandler()}
        
        >All Filters</Button>
    </Grid> 
    );
};

export default FilterBar;