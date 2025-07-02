import { getEnv } from "../utils/get-env"

// each env elemet access here return with a fallback default value
const appConfig = () => ({
    NODE_ENV: getEnv("NODE_ENV", "developnment"),
    PORT: getEnv("PORT", "5000"),
    BASE_PATH: getEnv('BASE_PATH', "/api"),
    MONGO_URI: getEnv('MONGO_URI', '')
})

export default appConfig;