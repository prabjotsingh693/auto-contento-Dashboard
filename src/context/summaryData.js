import React, { useState } from "react";

export const SummaryUserData = React.createContext();

const SummaryProvider = (props) => {
  const [imgList, setImgList] = useState([]);
  const [generalEdits, setGeneralEdits] = useState([]);
  const [facebookEdits, setFacebookEdits] = useState([]);
  const [twitterEdits, setTwitterEdits] = useState([]);
  const [linkedinEdits, setLinkedinEdits] = useState([]);
  const [pinterestEdits, setPinterestEdits] = useState([]);
  const [instagramEdits, setInstagramEdits] = useState([]);

  return (
    <SummaryUserData.Provider
      value={{
        imgList,
        setImgList,
        generalEdits,
        setGeneralEdits,
        facebookEdits,
        setFacebookEdits,
        twitterEdits,
        setTwitterEdits,
        linkedinEdits,
        setLinkedinEdits,
        pinterestEdits,
        setPinterestEdits,
        instagramEdits,
        setInstagramEdits,
      }}
    >
      {props.children}
    </SummaryUserData.Provider>
  );
};

export default SummaryProvider;
