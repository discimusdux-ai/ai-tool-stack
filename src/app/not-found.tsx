import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-brand-600">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="cta-button">
          Go Home →
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
