// Footer.jsx
export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-slate-200 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Harsh Sharma. All rights reserved.</p>
      <p>Designed and built with care.</p>
    </footer>
  );
}
