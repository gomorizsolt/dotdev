const ensureIcon = (collection, identifier, cb) => {
  const icon = collection[identifier.toLowerCase()];

  if (!icon) {
    // eslint-disable-next-line no-console
    console.warn(`Missing icon for ${identifier}.`);

    return null;
  }

  return cb(icon);
};

export default ensureIcon;
