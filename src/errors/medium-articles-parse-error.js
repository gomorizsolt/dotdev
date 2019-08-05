class MediumArticlesParseError extends Error {
  constructor(...args) {
    super(args);

    Error.captureStackTrace(this, MediumArticlesParseError);

    this.name = this.constructor.name;
  }
}

export default MediumArticlesParseError;
