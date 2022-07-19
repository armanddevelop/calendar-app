export const getEnvVariables = () => {
  let urlBase = "";
  if (process.env.NODE_ENV === "development") {
    urlBase = process.env.REACT_APP_API_URL_DEVELOPMENT;
  } else if (process.env.NODE_ENV === "production") {
    urlBase = process.env.REACT_APP_API_URL_PROD;
  }
  return { urlBase };
};
