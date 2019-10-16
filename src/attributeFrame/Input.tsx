import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => createStyles({
    InputBox: {
        width: "50%",
        height: "28px",
        lineHeight: "28px",
        margin: "0 5px",
        padding: "0 5px",
        border: "1px solid #c9c9cf"
    },
}));
interface Props{
    title: string[];
    getInfo(T: any): any;
}
export default function Input(props: Props) {
    const classes = useStyles();
    const [val, val1] = props.title;
    return (
      <>
        <span>{val}</span>
        <input className={classes.InputBox} onInput={(event) => { props.getInfo(event); }} />
        <span>{val1}</span>
      </>
    );
}
