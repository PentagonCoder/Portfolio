// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Harsh Sharma</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}
