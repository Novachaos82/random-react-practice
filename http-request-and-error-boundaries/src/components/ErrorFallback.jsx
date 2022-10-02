const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
