import Parser from "rss-parser";
import GetProxyURL from "../GetProxyURL/GetProxyURL";
import * as users from "../../../settings/Users";

export const GetCurrentMediumArticles = async () => {
  const RSSParser = new Parser();

  const proxiedURL = GetProxyURL(`https://medium.com/feed/${users.mediumSource}`);

  const currentArticles = await RSSParser.parseURL(proxiedURL);

  return currentArticles.items.filter(item => item.categories);
};
