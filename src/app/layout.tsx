// These styles apply to every route in the application
import Header from '../header/page'
import './css/global.css'
 

export const metadata = {
  title: "Assignment for Next.js",
  description: "Implemented by Next.js"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      </body>
    </html>
  )
}
