import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
} from "@material-ui/core";
import PianoImage from "./assets/piano.jpg";
import useContentful from "../../hooks/useContentful";
import { CompareSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    backgroundColor: "Black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "'Bebas Neue', cursive",
    margin:"3vh auto",
    // overflow:"hidden",
    // backgroundImage: `url(${PianoImage})`,
    // backgroundSize: "300%",
    // backgroundPosition: "center",
  },
  textWrapper: {
    padding: "2%",
    height: "60vh",
  },
}));

// function checkContentType(asset) {
//   const {file:{contentType}} = asset.fields
//   switch(contentType){
//     case "audio/":

//   }
// }

function createCard(asset) {
  console.log("Asset", asset);
  const {
    title,
    file: { contentType, fileName, url },
    thumbnailImage,
  } = asset?.fields;

  const {
    // file: {
    url: thumbnailURL,
    // },
  } = thumbnailImage?.fields?.file;

  return (
    // <div>
    // {thumbnailURL ? (
    <ImageListItem key={url} >
      <img src={thumbnailURL} alt={fileName} loading="lazy" />
      <ImageListItemBar title={title} subtitle={contentType}  />
      {/* <h5>{title}</h5> */}
    </ImageListItem>
    // ) : (
    //   <div style={{ border: "1px solid white" }}>
    //     <h3>{title}</h3>
    //     <h4>{contentType}</h4>
    //   </div>
    // )}
    // </div>
  );
}

export default function SoundPage() {
  const { getAsset, getAssets, getEntries } = useContentful();
  const [assetList, setAssetList] = useState([]);
  const [entriesList, setEntriesList] = useState([]);

  useEffect(() => {
    // getAssets()
    //   .then((response) => setAssetList(response.items))
    //   .catch((err) => console.log(err));

    getEntries()
      .then((response) => setEntriesList(response.items))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // assetList.map((asset) => createCard(asset));

  //   function createCards(cardArray){
  // 	console.log("CA", cardArray)
  //   }

  const classes = useStyles();

  return (
    // <Box>
      <Grid container className={classes.container}>
        {/* <Grid item xs={2}>
          Filter Nav
        </Grid> */}
        <Grid item xs={12}>
          <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={3}
            rowHeight={121}
          >
            {entriesList.map((asset) => createCard(asset))}
          </ImageList>
        </Grid>
      </Grid>
    // </Box>
  );
}
