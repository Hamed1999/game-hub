import noImagePlaceholder from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string, width: number = 600, height: number = 400) => {
  if (!url) return noImagePlaceholder;
  let target = "media/";
  const inedx = url.indexOf(target) + target.length;
  return url.slice(0, inedx) + "crop/" + width + "/" + height +"/" + url.slice(inedx); 
}


export default getCroppedImageUrl;