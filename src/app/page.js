import {v2 as cloudinary} from 'cloudinary';
import process from 'node:process'
import Galeria from './galeria';

export default async function Home() {
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

  const result = await cloudinary.api.resources({
    max_results: 500,
    type: 'upload',
    prefix: 'samples/landscapes'
  });
  // console.log(result);
  return (
    <main>
      <Galeria result={result} />
    </main>
  )
}
