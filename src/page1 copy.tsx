import React, {useState, useCallback} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import InputBox from "./attributeFrame/Input";
import SelectBox from "./attributeFrame/Select";
import RadioBox from "./attributeFrame/Radio";
import FontStyle from "./attributeFrame/FontStyle";

const useStyles = makeStyles(() => createStyles({
    div: {
        margin: "20px 0px",
        width: "300px",
    },
    w50: {
        width: "30%",
        display: "inline-block",
    }
}));
const dataArr: any[] = [{value: "按钮1", key: "按钮11",show:false}, {value: "按钮2", key: "按钮22",show:false}, {value: "按钮3", key: "按钮33",show:false}];
export default function page1() {
    const classes = useStyles();
    const [childValue, setChildValue] = useState("");
    const getInputValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setChildValue((event.target as HTMLInputElement).value);
    }, []);
    const [selectValue, setSelectValue] = useState("");
    const getSelectValue = useCallback((value: string) => {
        setSelectValue(value);
    }, []);
    const [radioValue, setRadioValue] = useState("");
    const getRadioValue = useCallback((value: string) => {
        setRadioValue(value);
    }, []);
    const [fontValue, setFontValue] = useState([{value: "按钮1", key: "按钮11",show:false}, {value: "按钮2", key: "按钮22",show:false}, {value: "按钮3", key: "按钮33",show:false}]);
    const getFontStyleValue = useCallback((value: array<any>) => {
      console.log(value)
      setTimeout(() => {
        setFontValue(value);
      }, 10);
      
   }, []);
    
    return (
      <>
        <div className={classes.div}>
          <h1>value:{childValue}
            </h1>
          <InputBox title={["在上方输入", "行"]} getInfo={getInputValue} />
        </div>
        <div className={classes.div}>
        宽度
          <div className={classes.w50}><InputBox title={["m"]} getInfo={getInputValue} /></div>
          <div className={classes.w50}><InputBox title={["h"]} getInfo={getInputValue} /></div>
        </div>
        <div className={classes.div}>
          <h1>value:{selectValue}
            </h1>
          <SelectBox title={["在上方输入"]} dataArr={dataArr} getInfo={getSelectValue} />
        </div>
        <div className={classes.div}>
          <h1>value:{radioValue}
            </h1>
          <RadioBox title={["斜线", "允许编辑", "aacc"]} getInfo={getRadioValue} />
        </div>
        <div className={classes.div}>
          <h1>value: {} </h1>
          <FontStyle data={fontValue} getInfo={getFontStyleValue} />
        </div>
      </>
    );
}
