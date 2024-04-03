function pathHandler(req, res, next) {
    return res.json({
        error: 404,
        message: `${req.url} not found endpoint`
    })
}

export default pathHandler