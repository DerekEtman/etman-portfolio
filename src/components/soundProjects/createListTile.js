import React from "react";
import { ImageListItem, ImageListItemBar } from "@material-ui/core";
import { useState } from "react";

export default function CreateListTile({ asset }) {
  const [hide, setHide] = useState(false);

  console.log("Asset", asset);
  const {
    title,
    file: { contentType, fileName, url },
    thumbnailImage,
  } = asset?.fields;

  const {
    url: thumbnailURL = null,
  } = thumbnailImage?.fields?.file;

  const mouseEnter = (e) => {
    e.preventDefault();
    setHide(true);
  };

  const mouseLeave = (e) => {
    e.preventDefault();
    setHide(false);
  };
  
  console.log("URL", thumbnailURL)
  return (
      <ImageListItem
      key={thumbnailURL}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
    >
      {hide && <ImageListItemBar title={title} subtitle={contentType} />}
      <img src={`${thumbnailURL}?w=300&h=180&q=90`} alt={fileName} loading="lazy"/>
    </ImageListItem>
  );
}
