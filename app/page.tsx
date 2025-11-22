import { Title } from '@/app/components/Title';
import { getMetadata } from '@/lib/getMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('/');
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center bg-white px-16 py-32 dark:bg-black">
        <Title />
      </main>
    </div>
  );
}
