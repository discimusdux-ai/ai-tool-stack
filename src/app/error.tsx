"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
        Something went wrong
      </h1>
      <p className="mb-8 max-w-md text-gray-600">
        An unexpected error occurred. Please try again.
      </p>
      <button onClick={reset} className="cta-button">
        Try Again →
      </button>
    </div>
  );
}
