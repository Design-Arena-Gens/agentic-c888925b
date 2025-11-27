import './globals.css';

export const metadata = {
  title: 'Minimalist Banner',
  description: 'Create a clean, minimalist banner with simple drawn elements.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

