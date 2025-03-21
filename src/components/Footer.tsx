import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About cidafm
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-base text-gray-500 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/submit" className="text-base text-gray-500 hover:text-gray-900">
                  Submit AFM
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-base text-gray-500 hover:text-gray-900">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/stats" className="text-base text-gray-500 hover:text-gray-900">
                  Stats
                </Link>
              </li>
              <li>
                <Link href="/compatibility" className="text-base text-gray-500 hover:text-gray-900">
                  Compatibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} cidafm central. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 