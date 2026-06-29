import './globals.css';

export const metadata = {
  title: 'The Card Club',
  description: 'Play. Compete. Win. Repeat.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
