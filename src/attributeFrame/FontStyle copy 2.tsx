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
    let newstyleList = JSON.parse(JSON.stringify(styleList)) 
    const handleClick = useCallback((value: any,index: any) => {
        newstyleList[index].bl = !newstyleList[index].bl;
        setStyleList(newstyleList)
     }, []);
     
    return (
      <>
        <ul className={classes.ul}>
            {props.data.map((item,index) => <li className={`${classes.btn} ${newstyleList[index].bl?classes.active:""}`} key={index} title={item.key} onClick={() => {handleClick(item.key,index)}}>{item.value}</li>)}
        </ul>
      </>
    );
}
