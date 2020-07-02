import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Publish } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  uploadButton: {
    marginLeft: "10px",
  },
}));

const UploadImage = (props) => {
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState();
  // const [previewUrl, SetPreviewUrl] = useState();

  const classes = useStyles();
  const imgPickerRef = useRef();

  //   useEffect(() => {
  //     if (!file) {
  //       return;
  //     }

  //     const fileReader = new FileReader();
  //     fileReader.onloadend = () => {
  //       SetPreviewUrl(fileReader.result)
  //     };
  //     fileReader.readAsDataURL(file);
  //   }, [file]);

  const imagePicker = () => {
    imgPickerRef.current.click();
  };

  const pickHandler = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files.length === 1) {
      setIsValid(true);
      setFile(event.target.files[0]);
      props.uploadImage(event.target.files[0])
    }
  };

  return (
    <>
      <input
        id="imgUpload"
        ref={imgPickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".png"
        onChange={pickHandler}
      />
      <Button
        variant="contained"
        disabled={props.isLoading}
        onClick={imagePicker}
        style={{ backgroundColor: isValid ? '#7EBDC2' : '' }}
        className={classes.uploadButton}
      >
        Upload icon
        <Publish fontSize="inherit" />
      </Button>
    </>
  );
};

export default UploadImage;
