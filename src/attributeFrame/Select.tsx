import React, {useCallback} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import SelectBtn from "@material-ui/core/Select";
import "./attr-css";

const useStyles = makeStyles(() => createStyles({
    selectBox: {
        width: "100px",
        height: "30px",
        lineHeight: "30px",
        margin: "0 5px",
        padding: "0 5px",
        border: "1px solid #c9c9cf",
    },
}));
interface Props{
    title: string[];
    dataArr: string[];
    getInfo(T: any): any;
}
export default function Select(props: Props) {
    const classes = useStyles();
    const [state, setState] = React.useState<{ value: string | number; key: string }>({
        value: "",
        key: "",
    });
    const changeSelect = useCallback((key: keyof typeof state) => (
        event: React.ChangeEvent<{ value: unknown }>,
    ) => {
        props.getInfo(event.target.value);
        setState({
            ...state,
            [key]: event.target.value,
        });
    }, []);
    return (
        <div>
        {props.title}
        <SelectBtn
                native
                className={classes.selectBox}
                value={state.value}
                onChange={changeSelect("value")}
                inputProps={{
                    key: "value",
                    id: "filled-value-native-simple",
                }}
            >
                {props.dataArr.map((item: any, index) => <option value={item.key} key={index}>{item.value}</option>)}
            </SelectBtn>
      </div>
    );
}
