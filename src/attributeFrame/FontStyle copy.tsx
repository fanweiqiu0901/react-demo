import React,{useState,useCallback} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => createStyles({
    ul: {
        borderLeft:"1px solid #979ca4",
        clear:"both",
        height:"30px",
        padding:"0px",
        margin:"0px",
    },
    btn:{
        // background:(styleList.bl) "red"?"none",
        listStyle:"none",
        float:"left",
        border:"1px solid #979ca4",
        borderLeft:"0px",
        width:"60px",
        height:"28px",
        textAlign:"center",
        lineHeight:"28px",
        cursor: "pointer",
    },
    active:{
        background:"red",
    }
}));
interface Props{
    data:array<any>
    getInfo(T: any): any;
}

export default function FontStyle(props: Props) {
    const classes = useStyles();
    const [styleList, setStyleList] = useState(props.data);
    const handleClick = useCallback((value: any,index: any) => {
        let newstyleList = JSON.parse(JSON.stringify(styleList)) 
        newstyleList[index].bl = !newstyleList[index].bl;
        setStyleList(newstyleList)
        props.getInfo(styleList)
     }, []);
    return (
      <>
        <ul className={classes.ul}>
            {props.data.map((item,index) => <li className={classes.btn} key={index} title={item.key} onClick={() => {handleClick(item.key,index)}}>{item.value}</li>)}
        </ul>
      </>
    );
}
