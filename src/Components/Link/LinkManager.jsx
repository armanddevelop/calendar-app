export const LinkManager = ({ pageName }) => {
  const registerPath = "/auth/register";
  const logInPath = "/auth/login";

  return (
    <>
      <a
        className="form__manager__link"
        href={pageName === "logIn" ? registerPath : logInPath}
      >
        {pageName === "logIn" ? "Register" : "LogIn"}
      </a>
    </>
  );
};
