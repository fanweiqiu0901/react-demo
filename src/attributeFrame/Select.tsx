import React,{ Fragment } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import "./attr-css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectBox: {
      width: "100px",
      height: "30px",
      lineHeight: "30px",
      margin: "0 5px",
      padding: "0 5px",
      border: "1px solid #c9c9cf",
    },
  })
  export default function Select({title , dataArr, getInfo}) {
    const classes = useStyles();
    const [state, setState] = React.useState<{ value: string | number; key: string }>({
        value: '',
        key: '',
      });
    const changeSelect = (key: keyof typeof state) => (
        event: React.ChangeEvent<{ value: unknown }>,
      ) => {
        getInfo(event.target.value)
        setState({
        ...state,
        [key]: event.target.value,
        });
      };
    return (
      <Fragment>
        {title}
        <Select
          native
          className={classes.selectBox} 
          value={state.value}
          onChange={changeSelect("value")}
          inputProps={{
            key: 'value',
            id: 'filled-value-native-simple',
          }}
        >
         { dataArr.map((item,index) =><option value={item.key}>{item.value}</option>)}
        </Select>
      </Fragment>
    )
}