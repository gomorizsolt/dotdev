import Parser from "rss-parser";
import GetProxyURL from "../GetProxyURL/GetProxyURL";

export const GetCurrentMediumArticles = async () => {
  const RSSParser = new Parser();

  const proxiedURL = GetProxyURL("https://medium.com/feed/@zsgomori");

  const currentArticles = await RSSParser.parseURL(proxiedURL);

  return currentArticles.items.filter(item => item.categories);
};
