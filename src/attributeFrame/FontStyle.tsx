import React, {useCallback} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => createStyles({
    ul: {
        borderLeft: "1px solid #979ca4",
        clear: "both",
        height: "30px",
        padding: "0px",
        margin: "0px",
    },
    btn: {
        listStyle: "none",
        float: "left",
        border: "1px solid #979ca4",
        borderLeft: "0px",
        width: "60px",
        height: "28px",
        textAlign: "center",
        lineHeight: "28px",
        cursor: "pointer",
    },
    active: {
        background: "red",
    }
}));
interface Props{
    data: any[];
    getInfo(T: any): any;
}
export default function FontStyle(props: Props) {
    const classes = useStyles();
    const handleClick = useCallback((index: any) => {
        const arr: any[] = [];
        props.data[index].show = !props.data[index].show;
        props.data.map((item: any) => {
            arr.push(item);
        });
        props.getInfo(arr);
    }, []);
    return (
      <>
        <ul className={classes.ul}>
          {props.data.map((item, index) => <li className={`${classes.btn} ${item.show ? classes.active : ""}`} key={index} title={item.key} onClick={() => { handleClick(index); }}>{item.value}</li>)}
        </ul>
      </>
    );
}
