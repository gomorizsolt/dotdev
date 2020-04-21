import RSSParser from "rss-parser";
import Url from "url-parse";

const filterItems = items => items.filter(item => item.categories);

const proxify = (proxy, url) => {
  const proxifiedUrl = new Url(proxy);

  proxifiedUrl.set("pathname", url);

  return proxifiedUrl;
};

export const getArticles = async (proxy, username) => {
  const rssParser = new RSSParser();
  const feedUrl = proxify(proxy, `https://medium.com/feed/${username}`);

  return rssParser
    .parseURL(feedUrl)
    .then(content => filterItems(content.items));
};
