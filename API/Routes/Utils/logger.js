const logger = (request,response,next) => {
    console.log("==========");
    console.log("request");
    console.log(`method: ${request.method}`);
    console.log(`path: ${request.path}`);
    console.log('body: ');
    console.log(request.body);
    console.log("==========");
    next();
}

module.exports = {
    logger,
};