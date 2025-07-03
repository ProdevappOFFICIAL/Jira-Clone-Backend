import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./config/app.config";
import { connectDatabase } from "./config/db.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middleware/errorHandler.middleware";

type defaultRouteType = {
  req: Request;
  res: Response;
  next: NextFunction;
};

const app = express();
const BASE_PATH = config.BASE_PATH;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);
app.use(
  session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === "poduction",
    httpOnly: true,
    sameSite: "lax",
  })
);

app.use(errorHandler)
app.get("/", ({ req, res, next }: defaultRouteType) => {
  res.status(HTTPSTATUS.OK).json({
    message: "Welcome to Jira Clone API",
  });
});

app.listen(config.PORT, async () => {
  console.log(
    `Server is running at PORT ${config.PORT} in the ${config.NODE_ENV} environment`
  );
  await connectDatabase();
});
