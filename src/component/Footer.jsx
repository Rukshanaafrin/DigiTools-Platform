const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top content */}
        <div className="grid md:grid-cols-5 gap-10 pb-10 border-b border-white/10">
          {/* Logo section */}
          <div>
            <h2 className="text-4xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 leading-7 text-sm">
              Premium digital tools for creators,
              professionals, and businesses.
              Work smarter with our suite of
              powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                ▶
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                f
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                X
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;