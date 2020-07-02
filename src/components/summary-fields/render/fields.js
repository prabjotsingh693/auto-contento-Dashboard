import React, { useState, useEffect } from "react";
import { Checkbox, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
  fields: {},
  checkbox: {
    flexBasis: "5.333333%",
    display: "flex",
  },
}));

const Fields = (props) => {
  const classes = useStyles();
  const [check, setCheck] = useState(false);
  const [localTitle, setLocalTitle] = useState('');
  const [localSummary, setLocalSummary] = useState('');

  const { checked, title, summary } = props;

  useEffect(() => {
    setCheck(checked);
    setLocalTitle(title);
    setLocalSummary(summary);
  }, [checked, title, summary]);

  return (
    <>
      <Grid container>
        <Grid item xs={1} className={classes.checkbox}>
          <Checkbox
            id="checked"
            checked={check}
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
            onBlur={(e) => {
              props.setSummary((prev) => {
                const data = [...prev];
                data[props.id].checked = e.target.checked;
                return data;
              });
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic"
            label="Title"
            value={localTitle}
            onChange={(e) => {
              setLocalTitle(e.target.value);
            }}
            onBlur={(e) => {
              props.setSummary((prev) => {
                const data = [...prev];
                data[props.id].title = e.target.value;
                return data;
              });
            }}
          />
          <TextField
            id="standard-multiline-flexible"
            error={localSummary ? (localSummary.length <= 150 ? false : true) : false}
            helperText={
              localSummary && ( localSummary.length <= 150 ? "" : "limit exceeded (only 150 char limit)")
            }
            label="summary"
            multiline
            variant="outlined"
            value={localSummary}
            onChange={(e) => {
              setLocalSummary(e.target.value);
            }}
            onBlur={(e) => {
              props.setSummary((prev) => {
                const data = [...prev];
                data[props.id].summary = e.target.value;
                return data;
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Fields;
