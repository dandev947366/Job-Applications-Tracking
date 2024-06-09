'use client';
import links from '@/utils/links';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='py-4 px-8 bg-muted h-full bg-slate-200'>
   
      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Button
              asChild
              key={link.href}
              variant={isActive ? 'default' : 'link'}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-3 p-3 rounded-md transition-all ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white hover:'
                }`}
              >
                {link.icon} <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
