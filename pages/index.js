import Head from "next/head";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import { useRef, useState } from "react";

export default function Home({ objectData }) {
  const [showConten, SetShowContent] = useState(false);
  const ref = useRef(null);

  function openDescription() {
    if (!showConten) {
      ref.current.classList.remove("hide");
      ref.current.classList.add("descript");
      SetShowContent((prev) => !prev);
    } else {
      ref.current.classList.add("hide");
      ref.current.classList.remove("descript");
      SetShowContent((prev) => !prev);
    }
  }
  return (
    <div className="container">
      <Head>
        <title>We are hiring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Open Vacancies</p>
        <h1>We are hiring!</h1>
        <div>Quality Assurance Engineering Businnes Development</div>
        <div className="items">
          {objectData.map((item) => {
            return (
              <div key={item.id} className="main-item">
                <div className="item">
                  <Link href={`/vacancy/${item.id}`}>
                    <a>
                      <span>{item.vacancy}</span>
                    </a>
                  </Link>
                </div>
                <div ref={ref} className="hide">
                  asd
                </div>
                <div className="btn">
                  <button onClick={openDescription}>+</button>
                </div>
                
              </div>
            );
          })}
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          width: 1440px;
          height: 1472px;
          padding: 100px 0 100px 120px;
        }

        h1 {
          width: 379px;
          height: 50px;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
        }

        .items {
          margin-top: 32px;
        }

        .main-item {
          position: relative;
        }

        .item {
          position: relative;
          width: 789px;
          height: 64px;
          margin-top: 17px;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: 1px solid black;
        }

        .item a {
          display: block;
          text-decoration: none;
          width: 100%;
          height: 100%;
        }

        .item a span {
          display: inline-block;
          width: 376px;
          height: 34px;
          margin: 15px 393px 15px 20px;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 34px;
        }

        .btn {
          position: absolute;
          width: 20px;
          height: 20px;
          left: 744px;
          top: 22px;
          border: 2px solid #1dca9d;
          z-index: 5;
        }

        .descript {
          width: 789px;
          height: 504px;
          border: 1px solid black;
          margin-top: 16px;
        }

        .hide {
          display: none;
        }
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
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "user.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: { objectData },
  };
}
