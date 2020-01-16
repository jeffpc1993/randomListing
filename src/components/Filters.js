import React from 'react';
import Chip from '@material-ui/core/Chip';



const Filters = ({items, onSelectChange,}) => {
    const [selected, setSelected ] = React.useState(new Set())
    const [isAllSelcted, setIsAllSelcted] = React.useState(true)

    const handleClick= item => {
        console.log('his')

        if (selected.has(item)){
            const selectedArray = [...selected];
            const index = selectedArray.indexOf(item);
            if (index > -1) {
                selectedArray.splice(index, 1);
            }
            const newSet = new Set(selectedArray)
            setSelected(newSet)
            onSelectChange(newSet)

        } else{
            const newSet = new Set([...selected, item])
            setSelected(newSet)
            onSelectChange(newSet)

        }
    }
    // console.log(selected)
    return ( <React.Fragment>

        {[...items].map(item => 
                  <Chip
                  label={item}
                  key={item}
                  onClick={() => handleClick(item)}
                  color={selected.has(item) ? "secondary" : "primary"}
                />
        )}
    </React.Fragment> );
}
 
export default Filters;