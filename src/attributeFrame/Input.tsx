import React,{ Fragment } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    InputBox: {
      width: "50%",
      height: "28px",
      lineHeight: "28px",
      margin: "0 5px",
      padding: "0 5px",
      border: "1px solid #c9c9cf",
    },
  })
  export default function Input({title ,getInfo}) {
    const classes = useStyles();
    const [val,val1] = title.split(",")
    return (
      <Fragment>
        <span>{val}</span><input className={classes.InputBox} onInput={e=>{getInfo(e.target.value)}} /><span>{val1}</span>
      </Fragment>
    )
}