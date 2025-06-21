import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my work and skills',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-midnight">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
