import './globals.css';
import { Montserrat } from 'next/font/google';
import { Sidebar } from '../components/Sidebar';
import { configData } from '../data';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: `${configData.name} | Portfólio`,
  description: 'Portfólio Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className="main-layout">
          <Sidebar />
          <div className="content-area">
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}