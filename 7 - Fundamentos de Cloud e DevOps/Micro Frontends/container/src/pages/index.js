import dynamic from 'next/dynamic';

const MicrosClientOnly = dynamic(() => import('../MicrosClientOnly'), {
  ssr: false,
});

export default function Home() {
  return <MicrosClientOnly />;
}
