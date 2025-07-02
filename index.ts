import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./src/config/app.config";

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

app.get("/", ({ req, res, next }: defaultRouteType) => {
  res.status(200).json({
    message: "Welcome to Jira Clone API",
  });
});

app.listen(config.PORT, async () => {
  console.log(
    `Server is running at PORT ${config.PORT} in the ${config.NODE_ENV} environment`
  );
});
