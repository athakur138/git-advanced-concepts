'use client';

export default function GlobalError({
  error,
  reset,
}: {
  readonly error: Error;
  readonly reset: () => void;
}): JSX.Element {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <pre>{error.message}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
