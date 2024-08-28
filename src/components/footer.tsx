import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <Link href="/support" className="hover:underline">Support</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="hover:underline">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul>
              <li className="mb-2">
                <Link href="/events" className="hover:underline">Events</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/forum" className="hover:underline">Forum</Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">Newsletter</Link>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Developers</h3>
            <ul>
              <li className="mb-2">
                <Link href="/docs" className="hover:underline">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href="/api" className="hover:underline">API Reference</Link>
              </li>
              <li className="mb-2">
                <Link href="/github" className="hover:underline">GitHub</Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="hover:underline">Community Guidelines</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Terms and Conditions and Login Button */}
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Blogspot. All rights reserved. <Link href="/terms" className="hover:underline">Terms and Conditions</Link></p>
          <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
