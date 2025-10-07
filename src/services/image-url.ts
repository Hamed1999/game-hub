const getCroppedImageUrl = (url: string) => {
  let target = "media/";
  const inedx = url.indexOf(target) + target.length;
  return url.slice(0, inedx) + "crop/600/400/" + url.slice(inedx); 
}


export default getCroppedImageUrl;