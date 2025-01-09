import Galeria from '@/app/galeria';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic'

export default function Home() {

  return (
    <Suspense fallback={<p>Obteniendo imágenes ...</p>}>
      <Galeria />
    </Suspense>
  )
}
