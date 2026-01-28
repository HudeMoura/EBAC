import dynamic from 'next/dynamic';

const RemoteApp = dynamic(() => import('../RemoteApp'), {
  ssr: false,
});

export default function Home() {
  return <RemoteApp />;
}
