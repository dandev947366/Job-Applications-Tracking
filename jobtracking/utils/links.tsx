import { AreaChart, Layers, AppWindow, Building2 } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  
  {
    href: '/jobs',
    label: 'all jobs',
    icon: <AppWindow />,
  },
  
  {
    href: '/companies',
    label: 'companies',
    icon: <Building2 />,
  },
];

export default links;