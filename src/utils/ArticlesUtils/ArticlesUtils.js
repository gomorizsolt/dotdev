import Parser from "rss-parser";
import GetProxyURL from "../GetProxyURL/GetProxyURL";
import settings from "../../../settings/settings.json";

export const GetCurrentMediumArticles = async () => {
  const RSSParser = new Parser();

  const proxiedURL = GetProxyURL(`https://medium.com/feed/${settings.mediumSource[0]}`);

  const currentArticles = await RSSParser.parseURL(proxiedURL);

  return currentArticles.items.filter(item => item.categories);
};
