import './globals.css';

export const metadata = {
  title: 'Drie reizen naar het zuiden — Belgische zuidpoolexpedities',
  description:
    'Interactief museum touch-wall prototype over drie Belgische zuidpoolexpedities: de Belgica (1897–1899), de Koning Boudewijnbasis (1957–1959), en de tocht van Hubert & Dansercoer (1997–1998).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
