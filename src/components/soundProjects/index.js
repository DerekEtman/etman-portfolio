import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, ImageList, ImageListItem, makeStyles } from "@material-ui/core";
import PianoImage from "./assets/piano.jpg";
import useContentful from "../../hooks/useContentful";
import { CompareSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    width:"100%",
    backgroundColor: "Black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "'Bebas Neue', cursive",
    // backgroundImage: `url(${PianoImage})`,
    // backgroundSize: "300%",
    // backgroundPosition: "center",
  },
  textWrapper: {
    padding: "2%",
    height: "60vh",
  },
}));

function createCard(asset) {
  const {
    title,
    file: { contentType, fileName, url },
    thumbnailImage,
  } = asset.fields;

  const{ file:{url: thubnailURL}} = thumbnailImage.fields

  console.log("create card", thumbnailImage.fields);

  return (
    <ImageListItem key={url}>
      {/* <p>{title}</p> */}
      <img src={thubnailURL} alt={fileName}/>
    </ImageListItem>
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
    <Box>
    <Grid container className={classes.container}>
      <Grid item xs={2}>
        Filter Nav
      </Grid>
      <Grid item xs={10}>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {entriesList.map((asset) => createCard(asset))}
        </ImageList>
      </Grid>
    </Grid>
    </Box>
  );
}
