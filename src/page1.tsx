import React, { Fragment ,useState } from 'react';
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import InputBox from "./attributeFrame/Input";
import SelectBox from "./attributeFrame/Select";
import Radio from "./attributeFrame/Radio";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      margin:"20px 0px",
      width:"300px",
    },
    w50:{
      width:"30%",
      display:"inline-block",
    }
  })
const dataArr = [{value:'11',key:'111'},{value:'21',key:'22'},{value:'31',key:'33'}];
export default function page1() {
  const classes = useStyles();
  const [childValue, setChildValue] = useState(null);
  const getInputValue = (value)=>{setChildValue(value);}
  const [selectValue, setSelectValue] = useState(null);
  const getSelectValue = (value)=>{ setSelectValue(value);}
  const [radioValue, setRadioValue] = useState(null);
  const getRadioValue = (value)=>{setRadioValue(value);}
  
  return (
    <Fragment>
      <div className={classes.div}>
        <h1>value:{childValue}</h1>
        <InputBox title="在上方输入,行" getInfo={getInputValue} />
      </div>
      <div className={classes.div}>
        宽度<div className={classes.w50}><InputBox title="m" getInfo={getInputValue} /></div><div className={classes.w50}><InputBox title="h" getInfo={getInputValue} /></div>
      </div>
      <div className={classes.div}>
       <h1>value:{selectValue}</h1>
        <SelectBox title="在上方输入" dataArr={dataArr} getInfo={getSelectValue} />
      </div>
      <div className={classes.div}>
       <h1>value:{radioValue}</h1>
       <Radio title={["斜线","允许编辑","aacc"]} getInfo={getRadioValue}/>
      </div>
    </Fragment>
  );
}