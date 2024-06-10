'use client';
import links from '@/utils/links';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='py-4 px-8 bg-muted h-full bg-slate-200'>
 <a href="/" className="font-bold text-3xl inline-block m-5">
        Job<span className="text-primary"> Tracking</span>
      
      </a>
      <div className='p-5 border-r border-r-gray-200 flex flex-col gap-2'>
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
                
                className={`mb-5 w-full flex items-center gap-3 p-3 h-full rounded-md transition-all ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
              >
                {link.icon} <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
