import { getEnv } from "../utils/get-env";

// each env elemet access here return with a fallback default value
const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "developnment"),
  PORT: getEnv("PORT", "5000"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),
  MONGO_URI: getEnv("MONGO_URI", ""),

  //SESSION CONSANTS
  SESSION_SECRET: getEnv("SESSION_SECRET"),
  SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),

  //GOOGLE CONSTANTS
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL"),

  //FRONTEND CONSTANTS
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "localhost:3000"),
  FRONTEND_GOOGLE_CALLBACK_URL: getEnv("FRONTEND_GOOGLE_CALLBACK_URL"),
});

export default appConfig;
