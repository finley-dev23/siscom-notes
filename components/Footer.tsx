"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} Siscom Africa. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


