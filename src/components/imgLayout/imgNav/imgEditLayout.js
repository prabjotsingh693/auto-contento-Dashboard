import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import Popover from "@material-ui/core/Popover";
import { SketchPicker } from "react-color";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
  layout: {
    marginLeft: "6%",
  },
  submit: {
    marginLeft: "20%",
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const ImageEditLayout = (props) => {
  const [alignment, setAlignment] = useState("center");
  const [position, setPosition] = useState("centerSide");

  const [titleFormats, setTitleFormats] = useState(() => [""]);
  const [titleSize, setTitleSize] = useState();
  const [titleColor, setTitleColor] = useState("#fff");
  const [titleBgColor, setTitleBgColor] = useState("#fff");

  const [subtitleFormats, setSubtitleFormats] = useState(() => [""]);
  const [subtitleSize, setSubtitleSize] = useState();
  const [subtitleColor, setSubtitleColor] = useState("#fff");
  const [subtitleBgColor, setSubtitleBgColor] = useState("#fff");

  const [anchor, setAnchor] = useState(null);
  const { previousSelection } = props;

  useEffect(() => {
    if (previousSelection === null) {
      return;
    }
    setTitleFormats(previousSelection.titleFormats);
    setAlignment(previousSelection.alignment);
    setSubtitleFormats(previousSelection.subtitleFormats);
    setPosition(previousSelection.position);
    setTitleSize(previousSelection.titleSize);
    setTitleColor(previousSelection.titleColor);
    setTitleBgColor(previousSelection.titleBgColor);
    setSubtitleSize(previousSelection.subtitleSize);
    setSubtitleColor(previousSelection.subtitleColor);
    setSubtitleBgColor(previousSelection.subtitleBgColor)
  }, [previousSelection]);

  const handleTitleFormat = (event, newFormats) => {
    setTitleFormats(newFormats);
  };

  const handleSubtitleFormat = (event, newFormats) => {
    setSubtitleFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSubmit = () => {
    const obj = {
      titleFormats,
      titleSize,
      titleColor,
      titleBgColor,
      alignment,
      subtitleFormats,
      subtitleSize,
      subtitleColor,
      subtitleBgColor,
      position
    };
    props.submit(obj);
  };

  const classes = useStyles();
  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          value={titleFormats}
          className={classes.layout}
          onChange={handleTitleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="title" aria-label="title" disabled>
            <Typography>Title</Typography>
          </ToggleButton>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <FormControl variant="outlined">
            <InputLabel htmlFor="titleSize">size</InputLabel>
            <Select
              native
              value={titleSize}
              onChange={(e) => {
                setTitleSize(e.target.value);
              }}
              inputProps={{
                name: "size",
                id: "titleSize",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"27px"}>27px</option>
              <option value={"30px"}>30px</option>
              <option value={"33px"}>33px</option>
              <option value={"36px"}>36px</option>
              <option value={"39px"}>39px</option>
              <option value={"42px"}>42px</option>
              <option value={"45px"}>45px</option>
              <option value={"48px"}>48px</option>
              <option value={"51px"}>51px</option>
              <option value={"54px"}>54px</option>
              <option value={"57px"}>57px</option>
              <option value={"60px"}>60px</option>
              <option value={"63px"}>63px</option>
              <option value={"66px"}>66px</option>
              <option value={"69px"}>69px</option>
              <option value={"72px"}>72px</option>
              <option value={"75px"}>75px</option>
              <option value={"78px"}>78px</option>
              <option value={"81px"}>81px</option>

            </Select>
          </FormControl>
        </StyledToggleButtonGroup>

        <StyledToggleButtonGroup size="small" aria-label="text formatting">
          <ToggleButton
            aria-describedby="titleTextColor"
            value="titleTextColor"
            onClick={(event) => {
              setAnchor(event.currentTarget);
            }}
          >
            <FormatColorTextIcon />
          </ToggleButton>
          <Popover
            id="titleTextColor"
            open={anchor && anchor.value === "titleTextColor" ? true : false}
            anchorEl={anchor}
            onClose={() => {
              setAnchor(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <SketchPicker
              color={titleColor}
              onChange={(color) => {
                setTitleColor(color);
              }}
            />
          </Popover>

          <ToggleButton
            aria-describedby="titleTextBackgroundColor"
            value="titleTextBackgroundColor"
            onClick={(event) => {
              setAnchor(event.currentTarget);
            }}
          >
            <FormatColorFillIcon />
          </ToggleButton>
          <Popover
            id="titleTextBackgroundColor"
            open={
              anchor && anchor.value === "titleTextBackgroundColor"
                ? true
                : false
            }
            anchorEl={anchor}
            onClose={() => {
              setAnchor(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <SketchPicker
              color={titleBgColor}
              onChange={(color) => {
                setTitleBgColor(color);
              }}
            />
          </Popover>
        </StyledToggleButtonGroup>

        <Divider flexItem orientation="vertical" className={classes.divider} />

        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" className={classes.divider} />

        <StyledToggleButtonGroup
          size="small"
          value={position}
          exclusive
          onChange={(e,newFormats)=>{setPosition(newFormats)}}
          aria-label="text alignment"
        >
          <ToggleButton value="leftSide" aria-label="left aligned">
            <ArrowBackIcon />
          </ToggleButton>
          <ToggleButton value="centerSide" aria-label="centered">
            <CenterFocusStrongIcon />
          </ToggleButton>
          <ToggleButton value="rightSide" aria-label="right aligned">
            <ArrowForwardIcon />
          </ToggleButton>
          <ToggleButton value="upSide" aria-label="justified">
            <ArrowUpwardIcon />
          </ToggleButton>
          <ToggleButton value="downside" aria-label="justified">
            <ArrowDownwardIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Divider flexItem orientation="vertical" className={classes.divider} />

        <StyledToggleButtonGroup
          size="small"
          value={subtitleFormats}
          onChange={handleSubtitleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <FormControl variant="outlined">
            <InputLabel htmlFor="subTitleSize">size</InputLabel>
            <Select
              native
              value={subtitleSize}
              onChange={(e) => {
                setSubtitleSize(e.target.value);
              }}
              inputProps={{
                name: "size",
                id: "subTitleSize",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"27px"}>27px</option>
              <option value={"30px"}>30px</option>
              <option value={"33px"}>33px</option>
              <option value={"36px"}>36px</option>
              <option value={"39px"}>39px</option>
              <option value={"42px"}>42px</option>
              <option value={"45px"}>45px</option>
              <option value={"48px"}>48px</option>
              <option value={"51px"}>51px</option>
              <option value={"54px"}>54px</option>
              <option value={"57px"}>57px</option>
              <option value={"60px"}>60px</option>
              <option value={"63px"}>63px</option>
              <option value={"66px"}>66px</option>
              <option value={"69px"}>69px</option>
              <option value={"72px"}>72px</option>
              <option value={"75px"}>75px</option>
              <option value={"78px"}>78px</option>
              <option value={"81px"}>81px</option>



              
            </Select>
          </FormControl>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup size="small" aria-label="text formatting">
          <ToggleButton
            aria-describedby="subtitleTextColor"
            value="subtitleTextColor"
            onClick={(event) => {
              setAnchor(event.currentTarget);
            }}
          >
            <FormatColorTextIcon />
          </ToggleButton>
          <Popover
            id="subtitleTextColor"
            open={anchor && anchor.value === "subtitleTextColor" ? true : false}
            anchorEl={anchor}
            onClose={() => {
              setAnchor(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <SketchPicker
              color={subtitleColor}
              onChange={(color) => {
                setSubtitleColor(color);
              }}
            />
          </Popover>

          <ToggleButton
            aria-describedby="subtitleTextBackgroundColor"
            value="subtitleTextBackgroundColor"
            onClick={(event) => {
              setAnchor(event.currentTarget);
            }}
          >
            <FormatColorFillIcon />
          </ToggleButton>
          <Popover
            id="subtitleTextBackgroundColor"
            open={
              anchor && anchor.value === "subtitleTextBackgroundColor"
                ? true
                : false
            }
            anchorEl={anchor}
            onClose={() => {
              setAnchor(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <SketchPicker
              color={subtitleBgColor}
              onChange={(color) => {
                setSubtitleBgColor(color);
              }}
            />
          </Popover>
          <ToggleButton value="Subtitle" aria-label="Subtitle" disabled>
            <Typography>Subtitle</Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Divider flexItem orientation="vertical" className={classes.divider} />

        <StyledToggleButtonGroup
          size="small"
          value={"submit"}
          exclusive
          onChange={handleSubmit}
          aria-label="text formatting"
        >
          <ToggleButton value="submit" aria-label="submit">
            Submit
            {/* <PublishIcon /> */}
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
};

export default ImageEditLayout;
