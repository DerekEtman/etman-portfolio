import { isCompositeComponent } from "react-dom/test-utils";

const useDetectBackgroundColor = (imageURL) => {
  // Not completely functional, the image element is 0 for some reason
  let canvas = document.createElement("canvas");

  let imageElement = new Image();
  imageElement.src = imageURL;
  // Remove for safety later
  imageElement.crossOrigin = "anonymous";

  let context = canvas.getContext && canvas.getContext("2d");
  let imgData;
  let width;
  let height;
  let length;
  let rgb = { r: 0, g: 0, b: 0 };
  let count = 0;

  // if(!imageURL) return rgb;

  canvas.height =
    imageElement.naturalHeight ||
    imageElement.offsetHeight ||
    imageElement.height;

  height = canvas.height;

  canvas.width =
    imageElement.naturalWidth || imageElement.offsetWidth || imageElement.width;
  width = canvas.width;

  context.drawImage(imageElement, 0, 0);

  if (width === 0 || height === 0) {
    width = 1;
    height = 1;
  }

  // CODE BREAKS HERE AT GET IMAGE DATA, all images are returning with 0 width and height
  imgData = context.getImageData(0, 0, width, height);
  // imgData = context
  console.log("imgdata", imgData.data);

  length = imgData.data.length;

  for (var i = 0; i < length; i += 4) {
    rgb.r += imgData.data[i];

    rgb.g += imgData.data[i + 1];

    rgb.b += imgData.data[i + 2];

    count++;
  }

  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  return rgb;
};

export default useDetectBackgroundColor;
