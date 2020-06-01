import Link from 'next/link';
import './index.scss';
import './error.scss';


const errorPage = () => (
  <main className="errorPage">
    <h1>
      Oops, Something went wrong.
    </h1>
    <h2>This is a custom error page in next JS</h2>
    <p>Go to <Link href="/"><a>Index page</a></Link></p>
  </main>
)

export default errorPage;