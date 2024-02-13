'use client';

export default function ImageCard({ href }: { href: string }) {
  return (
    <div>
      <img src={href} className='object-contain' />
    </div>
  );
}
