exports.exampleMethod = async (res, res, next) => {
  try {
    res.status(200).json({ message: 'Example Message' });
  } catch(err) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }

    next(err);
  }
}