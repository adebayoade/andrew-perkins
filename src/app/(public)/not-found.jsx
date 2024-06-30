import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{ minHeight: '350px' }}
      className="px-3 text-center flex justify-center flex-col gap-4"
    >
      <h2 className="heading">404 - A problem occurred</h2>
      <p className="text-lg">We could not find the page you were looking for.</p>
      <p className="text-lg">
        Go back to the{' '}
        <Link className='font-semibold text-red-700 hover:underline' href="/">
          home page
        </Link>
      </p>
    </main>
  );
}
