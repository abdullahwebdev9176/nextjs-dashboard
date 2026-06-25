import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchCardData,  } from '../lib/data';
import { Suspense } from 'react';
import { CardsSkeleton } from '../ui/skeletons';
 
export default async function Page() {
  const allInvoices = await fetchCardData();

  return (
    <main>
      <h1 className="font-lusitana mb-4 text-xl md:text-2xl">
        Dashboard
      </h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        
      </div>
    </main>
  );
}