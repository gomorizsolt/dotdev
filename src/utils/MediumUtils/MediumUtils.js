import Parser from "rss-parser";
import getProxyURL from "../GetProxyURL/GetProxyURL";
import settings from "../../../settings/settings.json";

export const getMediumArticles = async () => {
  const rssParser = new Parser();

  const proxiedURL = getProxyURL(`https://medium.com/feed/${settings.mediumSource[0]}`);

  const currentArticles = await rssParser.parseURL(proxiedURL);

  return currentArticles.items.filter(item => item.categories);
};
