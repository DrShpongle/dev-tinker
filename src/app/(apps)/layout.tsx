export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="pt-20">{children}</main>
}
