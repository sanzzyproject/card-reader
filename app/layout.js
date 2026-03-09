import "./globals.css";

export const metadata = {
  title: "JSON Business Card Generator",
  description: "Create and download your developer business card",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
