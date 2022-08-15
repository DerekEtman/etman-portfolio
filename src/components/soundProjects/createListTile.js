import React from "react";
import { ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const useStyles = makeStyles((theme) => ({
  ImageListItem: {
    // border: "1px solid green",
    margin: "2px",
  },
  imageCardBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
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

  const mousehover = (e) => {
    e.preventDefault();
    setHide(!hide);
  };

  const handleProjectRoute = (e) => {
    e.preventDefault();
    console.log(asset.fields)
  };

  // const mouseLeave = (e) => {
  //   e.preventDefault();

  //   setHide(!hide);
  // };

  return (
    <ImageListItem
      key={thumbnailURL}
      onMouseEnter={mousehover}
      onMouseLeave={mousehover}
      className={classes.ImageListItem}
      // onClick={handleProjectRoute}
    >
      <Link to={`/sound/${asset.fields.file.sys.id}`}>
        <img
          className={classes.itemCard}
          src={`${thumbnailURL}?w=300&h=180&q=90`}
          alt={fileName}
          loading="lazy"
        />
      </Link>
      {hide && (
        <ImageListItemBar
          title={title}
          subtitle={contentType}
          position="top"
          className={classes.imageCardBar}
        />
      )}
    </ImageListItem>
  );
}
