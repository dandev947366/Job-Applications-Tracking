import { AreaChart, Layers, AppWindow, Building2, BetweenHorizontalStart } from 'lucide-react';

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
    href: '/add-job',
    label: 'add job',
    icon: <BetweenHorizontalStart />,
  },
  {
    href: '/companies',
    label: 'companies',
    icon: <Building2 />,
  },
];

export default links;