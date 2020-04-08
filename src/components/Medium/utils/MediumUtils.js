import RSSParser from "rss-parser";
import getProxyURL from "../../../utils/GetProxyURL/GetProxyURL";
import config from "../../../../config/config.yml";

const filterItems = items => items.filter(item => item.categories);

export const getArticles = async () => {
  const rssParser = new RSSParser();

  const proxiedFeedURL = getProxyURL(
    `https://medium.com/feed/${config.medium}`
  );

  return rssParser
    .parseURL(proxiedFeedURL)
    .then(content => filterItems(content.items));
};
