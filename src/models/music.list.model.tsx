import moment from "moment";

export const prepareMusicLists = (response: any) => {
  let temp: any = [];
  if (response) {
    let results = response["results"];
    for (let obj of results) {
      let musicObj = {
        artistId: obj["artistId"],
        artistName: obj["artistName"],
        artworkUrl60: obj["artworkUrl60"],
        artworkUrl100: obj["artworkUrl100"],
        collectionCensoredName: obj["collectionCensoredName"],
        collectionId: obj["collectionId"],
        collectionPrice: obj["collectionPrice"],
        country: obj["country"],
        currency: obj["currency"],
        discCount: obj["discCount"],
        releaseDate: moment(obj["releaseDate"]).format("MMM Do YY"),
        trackCensoredName: obj["trackCensoredName"],
        trackPrice: Math.abs(obj["trackPrice"]),
        trackId: obj["trackId"],
        artistViewUrl: obj["artistViewUrl"],
        collectionViewUrl: obj["collectionViewUrl"],
        previewUrl: obj["previewUrl"],
        trackViewUrl: obj["trackViewUrl"],
      };
      temp.push(musicObj);
    }
  }
  return temp;
};
