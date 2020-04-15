import RSSParser from "rss-parser";

const filterItems = items => items.filter(item => item.categories);

export const getArticles = async (proxy, username) => {
  const rssParser = new RSSParser();
  const feedUrl = `${proxy}https://medium.com/feed/${username}`;

  return rssParser
    .parseURL(feedUrl)
    .then(content => filterItems(content.items));
};
