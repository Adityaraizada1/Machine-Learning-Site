import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}
