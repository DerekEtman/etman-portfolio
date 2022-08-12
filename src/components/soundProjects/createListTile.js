import React from "react";
import { ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    itemCard: {
      border: "1px solid red",
    },
  },
}));

export default function CreateListTile({ asset }) {
  const classes = useStyles();

  const [hide, setHide] = useState(false);

  const {
    title,
    file: { contentType, fileName },
    thumbnailImage,
  } = asset?.fields;

  const { url: thumbnailURL = null } = thumbnailImage?.fields?.file;

  const mouseEnter = (e) => {
    e.preventDefault();
    setHide(true);
  };

  const mouseLeave = (e) => {
    e.preventDefault();

    setHide(false);
  };

  return (
    <ImageListItem
      key={thumbnailURL}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={classes.ImageListItem}
    >
      {!hide && <ImageListItemBar title={title} subtitle={contentType} />}

      <img
        className={classes.itemCard}
        src={`${thumbnailURL}?w=300&h=180&q=90`}
        alt={fileName}
        loading="lazy"
      />
    </ImageListItem>
  );
}
