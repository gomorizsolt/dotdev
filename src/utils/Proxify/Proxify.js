import Url from "url-parse";

const proxify = (proxy, url) => {
  const proxifiedUrl = new Url(proxy);

  proxifiedUrl.set("pathname", url);

  return proxifiedUrl.toString();
};

export default proxify;
