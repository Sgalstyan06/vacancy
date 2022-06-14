import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";
import { useRef, useState } from "react";
import Item from "../components/item";

export default function Home({ objectData }) {
  const [listItem, setListItem] = useState([...objectData]);
  // const ref = useRef(null);

  function changePlusBtn(id) {
    console.log("id", id);
    setListItem(
      listItem.map((item) => {
        if (item.id === id) {
          if (item.show_description_button === "-") {
            item.show_description_button = "+";
          } else {
            item.show_description_button = "-";
          }

          return item;
        } else {
          return item;
        }
      })
    );
  }
  console.log("listItem", listItem);
  return (
    <div className="container">
      <Head>
        <title>We are hiring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Open Vacancies</p>
        <h1>We are hiring!</h1>
        <div className="title">
          <span>Quality Assurance</span>
          <span className="block">Engineering</span>
          <span className="block">Businnes Development</span>
        </div>
        <section> <div className="items">
          {listItem.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} changePlusBtn={changePlusBtn} />
              </div>
            );
          })}
        </div>
        <aside className="">Benefit</aside>
        <i class="fa-solid fa-check"></i>
        </section>
       
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
          
          margin: 16px 0 60px 0;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
        }

        .title {
          height: 28px;
        }

        .block {
          margin-left: 40px;
        }
        .title span {
          display: inline-block;          
          height: 28px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
        }

        section{
          display:flex;          
        }

        aside {
          margin-top: 32px;

        }
        .items {
          margin-top: 32px;
          width: 789px;
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
