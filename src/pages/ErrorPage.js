import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
        {/* Optionally display error details */}
        {/* <p><i>{error.statusText || error.message}</i></p> */}
      </main>
    </>
  );
}

export default ErrorPage;