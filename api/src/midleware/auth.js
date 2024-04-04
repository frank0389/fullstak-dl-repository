const { UNAUTHORIZED } = require("http-status-codes");


const auth = (req, res, next)=>{

  const key = req.headers.apikey;
  if (key ==  process.env.API_KEY) {
      next();
  } else {
        res.status(UNAUTHORIZED).json({
            name:  'AuthenticationError',
            message: 'Invalid apikey',
            errors:  [],
        });
  }
}

module.exports= auth;