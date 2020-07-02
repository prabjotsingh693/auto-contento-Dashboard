import React from "react";
import Gallery from "react-grid-gallery";

import ImageEditLayout from "../../components/imgLayout/imgNav/imgEditLayout";
import useStyles from "./hooks/style";
import useRender from "./hooks/render";

const GeneralImages = (props) => {
  const classes = useStyles();
  const { images, layoutSelectHandler, onSelectImage, previousState } = useRender("general");

  return (
    <>
      <div className={classes.editingLayout}>
        <ImageEditLayout submit={layoutSelectHandler} previousSelection={previousState.general.userSelection}/>
      </div>

      <div className={classes.root}>
        <Gallery
          images={images}
          margin={5}
          backdropClosesModal={true}
          onSelectImage={onSelectImage}
          lightboxWidth={1536}
        />
      </div>
    </>
  );
};

export default GeneralImages;
