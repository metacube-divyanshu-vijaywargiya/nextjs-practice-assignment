"use client"
import Link from 'next/link'
//in order to access active path , nextjs provide us a hook i.e., usePathname hook
import { usePathname } from 'next/navigation'
export const Navigation = ()=> {
    const pathName = usePathname();
  return (
    <nav>
        <Link href="/" className={pathName == '/' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Home</Link>
        <Link href="/about" className={pathName == '/about' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>About</Link>
        <Link href="/products/iPhone123" className={pathName.startsWith("/products/") ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Dynamic product page</Link>
        <Link href="/nested-route/blog" className={pathName == '/nested-route/blog' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Nested Blog page</Link>
        <Link href="/users-client" className={pathName == '/users-client' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Users Client</Link>
        <Link href="/users-server" className={pathName == '/users-server' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Users Server</Link>
        <Link href="/mock-users" className={pathName == '/mock-users' ? 'font-bold text-white mr-4' : 'mr-4 text-blue-500'}>Mock Users</Link>
    </nav>
  )
}

