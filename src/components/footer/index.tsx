import Link from 'next/link';

import './footer.scss';

export default function Footer(): JSX.Element {
  return (
    <div className='grid'>
      <Link href='/docs' className='card'>
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </Link>

      <Link href='/learn' className='card'>
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </Link>
    </div>
  );
}
