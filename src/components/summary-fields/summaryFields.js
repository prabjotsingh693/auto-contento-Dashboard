import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Add, Forward } from "@material-ui/icons";

import RenderSummary from "./render/summaryRender";
import UploadImage from "../../components/uploadImg/uploadImg";

// import { SummaryUserData } from "../../context/summaryData";

const useStyles = makeStyles(() => ({
  heading: {
    marginLeft: "6%",
    marginTop: "15px",
  },
  imageButtonRoot: {
    marginRight: "3%",
    marginTop: "15px",
  },
  iconStyle: {
    fontSize: "2.2rem",
    marginTop: "-6px",
  },
  forwarIcon: {
    fontSize: "2.2rem",
    // marginTop: "-6px",
    marginRight: "60px",
  },
  addButton: {},
  uploadButton: {
    marginLeft: "10px",
  },
  imageButton: {},
}));

const SummaryFields = (props) => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: " center",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.heading}>
          <Button
            variant="contained"
            disabled={props.isLoading}
            onClick={props.addSelection}
            className={classes.addButton}
          >
            Add new
            <Add fontSize="inherit" />
          </Button>

          <UploadImage
            isLoading={props.isLoading}
            uploadImage={props.uploadImage}
          />
        </div>

        <div className={classes.imageButtonRoot}>
          <Button
            variant="contained"
            disabled={props.isLoading}
            onClick={props.submitSelection}
            className={classes.imageButton}
          >
            Images
            <Forward fontSize="inherit" />
          </Button>
        </div>
      </div>
      <div>
        <RenderSummary
          summary={props.summarydata}
          setSummary={props.setSummaryData}
        />
      </div>
    </>
  );
}

export default SummaryFields;
