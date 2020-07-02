import { useContext, useEffect, useState } from "react";

import { SummaryUserData } from "../../../context/summaryData";
import layoutIntoRules from "../utils/layoutIntoRules";
import sizeConvert from "../utils/sizeConvert";

const previousState = {
  general: {
    userSelection: null,
  },
  facebook:{
    userSelection: null,
  },
  instagram:{
    userSelection: null,
  },
  linkedin:{
    userSelection: null,
  },
  pinterest:{
    userSelection: null,
  },
  twitter:{
    userSelection: null,
  }
};

const useRender = (source) => {
  const imgs = useContext(SummaryUserData);
  const [images, setImages] = useState([]);
  const methods = {
    general: {
      imgList: imgs.imgList,
      edits: imgs.generalEdits,
      setEdits: imgs.setGeneralEdits,
    },
    facebook: {
      imgList: imgs.imgList,
      edits: imgs.facebookEdits,
      setEdits: imgs.setFacebookEdits,
    },
    twitter: {
      imgList: imgs.imgList,
      edits: imgs.twitterEdits,
      setEdits: imgs.setTwitterEdits,
    },
    linkedin: {
      imgList: imgs.imgList,
      edits: imgs.linkedinEdits,
      setEdits: imgs.setLinkedinEdits,
    },
    instagram: {
      imgList: imgs.imgList,
      edits: imgs.instagramEdits,
      setEdits: imgs.setInstagramEdits,
    },
    pinterest: {
      imgList: imgs.imgList,
      edits: imgs.pinterestEdits,
      setEdits: imgs.setPinterestEdits,
    },
  };

  const { imgList, edits, setEdits } = methods[source];

  //initial rendering
  useEffect(() => {
    if (edits.length !== 0) return;
    const arr = [];
    imgList.map((val) => {
      console.log(val.fullImg)
      const obj = {};
      obj["src"] = sizeConvert(val.fullImg, source);
      obj["thumbnail"] = val.thumImg
      obj["isSelected"] = false;
      obj["thumbnailWidth"] = 320;
      obj["thumbnailHeight"] = 167;
      arr.push(obj);
      return true;
    });
    setImages(arr);
    return () => {
      setImages([]);
    };
  }, [imgList, edits, source]);

  //rendering after image update
  useEffect(() => {
    if (edits.length === 0) return;
    const arr = [];
    edits.map((val) => {
      const obj = {};
      obj["src"] = sizeConvert(val.fullImg, source);
      obj["thumbnail"] = val.thumImg
      obj["isSelected"] = false;
      obj["thumbnailWidth"] = 320;
      obj["thumbnailHeight"] = 174;
      arr.push(obj);
      return true;
    });
    setImages(arr);
    return () => {
      setImages();
    };
  }, [edits, source]);

  const layoutSelectHandler = (payload) => {
    const updatedImages = layoutIntoRules(payload, imgs.imgList);
    setEdits(updatedImages);
    previousState[source].userSelection = payload;
  };

  const onSelectImage = (index, img) => {
    const temImages = [...images];
    const select = temImages[index];
    if (select.hasOwnProperty("isSelected")) {
      select.isSelected = !select.isSelected;
    } else {
      select.isSelected = true;
    }

    setImages(temImages);
  };

  return {
    images,
    layoutSelectHandler,
    onSelectImage,
    previousState,
  };
};
export default useRender;
