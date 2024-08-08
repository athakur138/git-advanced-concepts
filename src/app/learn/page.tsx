import Link from 'next/link';

import './learn.scss';

export default function Docs(): JSX.Element {
  return (
    <>
      <div className='description'>
        <Link href='/'>
          Get started by editing&nbsp;
          <code className='code'>src/app/learn/page.tsx</code>
        </Link>
      </div>

      <div className='center'>This is a learn page.</div>
    </>
  );
}
