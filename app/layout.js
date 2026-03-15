import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Abdul | Developpeur Fullstack",
  description: "Portfolio de Abdul YSUF",
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
