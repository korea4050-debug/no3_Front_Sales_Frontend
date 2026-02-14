import "./globals.css";
import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{display: 'flex', height: '100vh'}}>
        <Sidebar />
        <main style={{flex:1, padding:20}}>{children}</main>
        {children}
      </body>
    </html>
  );
}
