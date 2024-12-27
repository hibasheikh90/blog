import Link from 'next/link'
import { FaFacebook ,FaLinkedin , FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BlogBox</h3>
            <p className="text-gray-400">Exploring the power of AI in everyday life.</p>
          </div>
          <div>
          
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-gray-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/mega" className="text-white hover:text-gray-400 transition-colors duration-300">Blog</Link></li>
              <li><Link href="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            
            <p className="text-gray-400">Email: blogbox@gmail.com</p>
            <p className="text-gray-400">Phone: +1 234 567 89</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaFacebook size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">< FaTwitter size={24} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><IoLogoInstagram size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Blogbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 