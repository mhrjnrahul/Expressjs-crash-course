const errorHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status).json({
            message: err.message || "An error occurred",
        });
    } else {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

    res.status(404).json({
        message: err.message || "Not Found",
    });
}

export default errorHandler;