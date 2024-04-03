function errorHandler(error, req, res, next) {
    console.log(error)
    return res.json({
        error: error.statusCode || 500,
        message: `${req.method} ${req.url} ${error.message}`
    })
}

export default errorHandler