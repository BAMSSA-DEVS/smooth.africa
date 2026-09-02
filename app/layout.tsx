import type { Metadata } from 'next';
import { Inter, Saira_Stencil_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  variable: '--font-saira-stencil',
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Smooth Africa - Digital Products for African Organizations',
  description:
    'Smooth Africa designs, builds, and scales software that helps businesses, governments, and communities operate more efficiently across Africa. Products: SmoothBallot, SmoothTeam, Afrixa.',
  keywords: [
    'Smooth Africa',
    'African technology',
    'SmoothBallot',
    'SmoothTeam',
    'Afrixa',
    'HR software Africa',
    'election management Africa',
    'retail POS Africa',
  ],
  authors: [{ name: 'Smooth Africa', url: 'https://smooth.africa' }],
  metadataBase: new URL('https://smooth.africa'),
  openGraph: {
    title: 'Smooth Africa - Digital Products for African Organizations',
    description:
      'We design, build, and scale software that helps businesses, governments, and communities operate more efficiently across Africa.',
    url: 'https://smooth.africa',
    siteName: 'Smooth Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smooth Africa - Digital Products for African Organizations',
    description:
      'We design, build, and scale software that helps businesses, governments, and communities operate more efficiently across Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sairaStencilOne.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[#FAFAF9] dark:bg-[#141414] text-stone-900 dark:text-stone-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
