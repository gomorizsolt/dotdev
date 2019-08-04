import RSSParser from "rss-parser";
import getProxyURL from "../GetProxyURL/GetProxyURL";
import { medium } from "../../../settings/settings.json";

export const getArticles = async () => {
  const rssParser = new RSSParser();

  const proxiedURL = getProxyURL(`https://medium.com/feed/${medium}`);

  const content = await rssParser.parseURL(proxiedURL);

  return content.items.filter(item => item.categories);
};
