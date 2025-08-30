import type { Route } from './+types/home';
import Main from '../main/main';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'DJURE 2025' },
    { name: 'description', content: 'Welcome to DJURE 2025!' },
  ];
}

export default function Home() {
  return <Main />;
}
