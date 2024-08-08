import { inter } from '@/config/fonts';
import { siteConfig } from '@/config/metaConfig';

import { Footer } from '@/components';
import '../styles/global.scss';

export const metadata = siteConfig;

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='main'>
          {children} <Footer />
        </main>
      </body>
    </html>
  );
}
