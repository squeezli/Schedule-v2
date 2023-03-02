import * as React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export const SelectorItems = (props) =>{


    return(
        <Autocomplete 
                value={props.value}
                onChange={(event, newValue) => {
                    props.setValue(newValue);
                    // console.log("event selector: ",event)
                    // console.log("newValue selector: ",newValue)
                    // console.log("items selector: ",props.items)
                }}
                disablePortal
                id="combo-box-demo"
                options={props.items.map((item, index) => item)}
                sx={{ width: 300, paddingBottom:1 }}
                renderInput={(params) => <TextField {...params} label={props.label} />}
            />
    )
}