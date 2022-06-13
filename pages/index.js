import Head from 'next/head';
import Link from "next/link";

export default function Home({objectData}) {
  
  return (
    <div className="container">
      <Head>
        <title>We are hiring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>Open Vacancies</span>
        <h1>We are hiring</h1>
        <div>Quality Assurance Engineering Businnes Development</div>
        <ul>
          {objectData.map(item =>{
            return <li key={item.id}> <Link href = {`/vacancy/${item.id}`}><a>{item.vacancy}</a></Link> <button>+</button></li>
          })}
        </ul>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'user.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {objectData}
  }
}

