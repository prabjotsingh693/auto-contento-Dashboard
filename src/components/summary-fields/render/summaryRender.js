import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Fields from "./fields";
// import { SummaryUserData } from "../../../context/summaryData";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const RenderSummary = (props) => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} autoComplete="off">
        {props.summary !==0 && props.summary.map((val, indx) => {
          return (
            <Fields
              key={"sh@dwe" + indx + "ddw"}
              id={indx}
              checked={val.checked}
              title={val.title}
              summary={val.summary}
              setSummary={props.setSummary}
            />
          );
        })}
      </form>
    </div>
  );
};

export default RenderSummary;
