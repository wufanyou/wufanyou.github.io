const icons: Record<string, React.ReactNode> = {
  tree: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2L4 14h5v8h6v-8h5z" />
    </svg>
  ),
  traffic: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />
      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="8" y1="7" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="7" x2="13.5" y2="10.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="17" x2="10.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="17" x2="13.5" y2="13.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  ),
  gold: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#FFD700" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">1</text>
    </svg>
  ),
  silver: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#C0C0C0" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">2</text>
    </svg>
  ),
  rank4: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#0076df" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">4</text>
    </svg>
  ),
  rank6: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#0076df" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">6</text>
    </svg>
  ),
  rank8: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#0076df" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">8</text>
    </svg>
  ),
  rank10: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#0076df" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">10</text>
    </svg>
  ),
};

export default function CategoryIcon({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center justify-center text-[#0076df]">
      {icons[category] || null}
    </span>
  );
}
