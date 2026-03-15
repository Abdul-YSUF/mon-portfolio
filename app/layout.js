import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Abdul le Dev | Développeur Web",
  description: "Portfolio d'Abdul le Dev",
  icons: {
    icon: "/assets/abdul-le-dev-favicon-white.webp",
    apple: "/assets/abdul-le-dev-favicon-white.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
