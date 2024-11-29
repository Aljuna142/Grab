//import errorHandler line missing
/*const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 500;


    if(process.env.Node_ENV == 'development'){
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack:err.stack,
            error :err
          }); 
    }


    if(process.env.Node_ENV == 'production'){
        let message =err.message;
        let error = new Error(message);



        if(err.name=="ValidationError"){
            message= Objects.value(err.errors).map(value=> value.message)
            error =new Error(message) ;// will do correction in this line late

        }
if(err.name == 'CastError'){
    message= `Resource not found: ${err.path}`;
    error= new Error(message) // will do some changes later 
}

        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'

    })
    
  };
}
  export default errorMiddleware;*/

  /*lastconst errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack); // Log error stack in development mode
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error: err
        });
    } else if (process.env.NODE_ENV === 'production') {
        let message = err.message;

        if (err.name === 'ValidationError') {
            message = Object.values(err.errors).map(val => val.message).join(', ');
        }
        if (err.name === 'CastError') {
            message = `Resource not found: ${err.path}`;
        }

        res.status(err.statusCode).json({
            success: false,
            message: message || 'Internal Server Error'
        });
    }
};

export default errorMiddleware;*/

const errorMiddleware = (err, req, res, next) => {
    console.error('Error caught by middleware:', err); // Log the entire error object
  
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
  
    if (process.env.NODE_ENV === 'development') {
      res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
        error: err
      });
    } else if (process.env.NODE_ENV === 'production') {
      let message = err.message;
  
      if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map(val => val.message).join(', ');
      }
      if (err.name === 'CastError') {
        message = `Resource not found: ${err.path}`;
      }
  
      res.status(err.statusCode).json({
        success: false,
        message: message || 'Internal Server Error'
      });
    }
  };
  
  export default errorMiddleware;
  
  /*doubtconst errorMiddleware = (err, req, res, next) => {
    console.error('Error caught by middleware:', err); // Log the entire error object
  
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
  
    // Ensure that the statusCode is set
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  
    if (process.env.NODE_ENV === 'development') {
      res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
        error: err
      });
    } else if (process.env.NODE_ENV === 'production') {
      let message = err.message;
  
      if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map(val => val.message).join(', ');
      }
      if (err.name === 'CastError') {
        message = `Resource not found: ${err.path}`;
      }
  
      res.status(err.statusCode).json({
        success: false,
        message: message || 'Internal Server Error'
      });
    }
  };
  
  export default errorMiddleware;doubt*/
  