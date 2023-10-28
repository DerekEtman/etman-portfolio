import React, { useEffect, useRef, useState } from "react";


import videojs from "video.js";
import { VideoJS } from "../videoJSPlayer";



export default function MediaRouter() {

    const exists = (optionList) => {
        switch (typeof optionList) {
          case "array":
            return true;
          case "object":
            return true;
          default:
            return false;
        }
      };

    return
}


