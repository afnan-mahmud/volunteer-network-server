// 404 not found handler
function notFoundHandler(req, res, next) {
  next();
}

function errorHandler(err, req, res, next) {
  console.log(err);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
