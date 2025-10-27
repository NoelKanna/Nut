import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-3 bg-blue-200">
      <p className="text-black">© 2024 nut. All rights reserved.</p>
      <div className="flex flex-row gap-4 mt-2">
        <a className="text-black" href="">
          <FaFacebook />
        </a>
        <a className="text-black" href="">
          <FaInstagram />
        </a>
        <a className="text-black" href="">
          <FaTwitter />
        </a>
        <a className="text-black" href="">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
