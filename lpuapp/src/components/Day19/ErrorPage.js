import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.log(error.data);
  return (
    <div>
        <h1>Oops</h1>
        <p>Sorry an unexpected error has occured</p>
        {error ? (
            <i>{error.statusText || error.message}</i>
        ) : (
            <p>No Error occured</p>
        )}
    </div>
  )
}

export default ErrorPage;
