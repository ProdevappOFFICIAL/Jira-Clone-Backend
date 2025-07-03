import { ErrorRequestHandler, NextFunction } from "express";
import { stat } from "../constants/statusMessage.constant";
import { HTTPSTATUS } from "../config/http.config";

// No need of errorHandlerType infer with any type
/*
type errorHandlerType = {
  error: Error;
  req: Request;
  res: Response;
  next: NextFunction;
};*/

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
    //Show the path where Error persist
    console.error( stat.ERROR_OCCURED + req.path, error)
    //Catch SyntaxError in json object
  if (error instanceof SyntaxError) {
    res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
      message: stat.SYNTAX_ERROR_MESSAGE,
      error: error?.message || stat.SYNTAX_ERROR,
    });
  }
  //Catch any error default fallback
  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: stat.SERVER_ERROR_MESSAGE,
    error: error?.message || stat.SERVER_ERROR,
  });
};
