export const prepareMusicDetails = (item: any) => {
  let temp: any = [];
  temp.push(
    {
      id: 1,
      title: "Artist Name",
      subTitle: item.artistName,
    },
    {
      id: 2,
      title: "Collection",
      subTitle: item.collectionCensoredName,
    },
    {
      id: 3,
      title: "Country",
      subTitle: item.country,
    },
    {
      id: 4,
      title: "Price",
      subTitle: item.trackPrice + " " + item.currency,
    },
    {
      id: 5,
      title: "Discount",
      subTitle: item.discCount + " " + item.currency,
    },
    {
      id: 6,
      title: "Release Date",
      subTitle: item.releaseDate,
    },
    {
      id: 7,
      title: "Artist View URL",
      subTitle: item.artistViewUrl,
    },
    {
      id: 8,
      title: "Collectio View URL",
      subTitle: item.collectionViewUrl,
    },
    {
      id: 9,
      title: "Preview URL",
      subTitle: item.previewUrl,
    },
    {
      id: 10,
      title: "Track View URL",
      subTitle: item.trackViewUrl,
    }
  );
  return temp;
};
