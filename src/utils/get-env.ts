//This is function to get the env file and detect error before entering the main backend

export const getEnv = ( key: string, defaultValue: string = "" ) => {
    //store the gotten env into a variable value
    const value = process.env[key];
  if (value === undefined) {
    if (defaultValue) {
      return defaultValue;
    }

    // detect errors before 
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
};
