import RSSParser from "rss-parser";
import getProxyURL from "../../../utils/GetProxyURL/GetProxyURL";
import settings from "../../../../settings/settings.json";
import MediumArticlesParseError from "../../../errors/medium-articles-parse-error";

const filterItems = items => items.filter(item => item.categories);

export const getArticles = async () => {
  const rssParser = new RSSParser();

  const proxiedFeedURL = getProxyURL(`https://medium.com/feed/${settings.medium}`);

  return rssParser
    .parseURL(proxiedFeedURL)
    .then(content => filterItems(content.items))
    .catch(err => {
      throw new MediumArticlesParseError(err);
    });
};
