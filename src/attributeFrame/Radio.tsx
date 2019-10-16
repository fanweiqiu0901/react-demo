import React, {useCallback} from "react";
import RadioBtn from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface Props{
    title: string[];
    getInfo(T: any): any;
}
export default function Radio(props: Props) {
    const [value, setValue] = React.useState("female");
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        props.getInfo((event.target as HTMLInputElement).value);
        setValue((event.target as HTMLInputElement).value);
    }, []);
    return (
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          { props.title.map((item, index) => <FormControlLabel value={item} key={index} control={<RadioBtn color="primary" />} label={item} labelPlacement="start" />)}
        </RadioGroup>
    );
}
