import React,{ Fragment } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
 
  }),
);
export default function Radio({title ,getInfo}) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getInfo((event.target as HTMLInputElement).value)
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            { title.map((item,index) =><FormControlLabel value={item}  control={<Radio color="primary" />} label={item} labelPlacement="start" />)}
        </RadioGroup>
    )
}