const layoutIntoRules = (layout, images) => {
  const {
    alignment,
    subtitleFormats,
    titleFormats,
    titleSize,
    titleColor,
    titleBgColor,
    subtitleSize,
    subtitleColor,
    subtitleBgColor,
    position,
  } = layout;

  const format = {
    bold: "font-weight:%20bold;",
    italic: "font-style:%20italic;",
    underlined: "text-decoration:%20underline;",
    titleSize: `font-size:${titleSize};`,
    titleColor: `color:${encodeURIComponent(titleColor.hex)};`,
    titleBgColor: `background-color:${encodeURIComponent(titleBgColor.hex)};`,
    subtitleSize: `font-size:${subtitleSize};`,
    subtitleColor: `color:${encodeURIComponent(subtitleColor.hex)};`,
    subtitleBgColor: `background-color:${encodeURIComponent(
      subtitleBgColor.hex
    )};`,
    leftSide: "&oRiEnT=left",
    centerSide: "&oRiEnT=center",
    rightSide: "&oRiEnT=right",
    upSide: "&oRiEnT=top",
    downside: "&oRiEnT=bottom",
  };
  const updateImgs = [...images];

  let title = "&titleStyle=";
  let subtitle = "&subStyle=";
  let container = `&container=text-align:${alignment}`;
  // container += format[position]

  titleFormats.map((val) => {
    if (val !== "" && val) {
      title += format[val];
    }
    return true;
  });

  if (titleSize !== undefined) {
    title += format.titleSize;
  }

  if (titleColor.hex !== undefined) {
    title += format.titleColor;
  }

  if (titleBgColor.hex !== undefined) {
    title += format.titleBgColor;
  }

  subtitleFormats.map((val) => {
    if (val !== "" && val) {
      subtitle += format[val];
    }
    return true;
  });

  if (subtitleSize !== undefined) {
    subtitle += format.subtitleSize;
  }

  if (subtitleColor.hex !== undefined) {
    subtitle += format.subtitleColor;
  }

  if (subtitleBgColor.hex !== undefined) {
    subtitle += format.subtitleBgColor;
  }

  
  const img = updateImgs.map((val) => {
    let tempFull;
    let tempThug;
    if (position !== "centerSide") {
      tempFull = val.fullImg.replace(/oRiEnT=center/gi, format[position]);
      tempThug = val.thumImg.replace(/oRiEnT=center/gi, format[position]);
    } else {
      tempFull = val.fullImg;
      tempThug = val.thumImg;
    }
    tempFull += `${title}${subtitle}${container}`;
    tempThug += `${title}${subtitle}${container}`;

    const obj ={
      fullImg : tempFull,
      thumImg : tempThug
    }
    return obj;
  });

  return img;
};

export default layoutIntoRules;
