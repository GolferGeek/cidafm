import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">cidafm central</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/afms" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Browse AFMs
            </Link>
            <Link href="/docs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Documentation
            </Link>
            <Link href="/submit" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Submit AFM
            </Link>
            <Link href="/stats" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Stats
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 