import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";
import { useState } from "react";
import Item from "../components/item";

export default function Home({ objectData }) {
  const [listItem, setListItem] = useState([...objectData]);

  function changePlusBtn(id) {
    
    setListItem(
      listItem.map((item) => {
        if (item.id === id) {
          if (item.show_description_button === "/images/minus.png") {
            item.show_description_button = "/images/plus.png";
          } else {
            item.show_description_button = "/images/minus.png";
          }
          return item;
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="container">
      <Head>
        <title>We are hiring</title>
      </Head>

      <main>
        <p>Open Vacancies</p>
        <h1>We are hiring!</h1>
        <div className="title">
          <span>Quality Assurance</span>
          <span className="title-block">Engineering</span>
          <span className="title-block">Businnes Development</span>
        </div>

        <section>
          <div className="items">
            {listItem.map((item) => {
              return (
                <div key={item.id}>
                  <Item item={item} changePlusBtn={changePlusBtn} />
                </div>
              );
            })}
          </div>

          <aside className="aside">
            <div className="first-row">BENEFIT IS BEING WRAISIT MEMBER</div>
            <div className="check-image second-row">
              <img src="/images/Vectorcheck.png" />{" "}
              <span>Flexible remote wroking schedule</span>
            </div>
            <div className="check-image">
              <img src="/images/Vectorcheck.png" />{" "}
              <span>Health insurance</span>
            </div>
            <div className="check-image">
              <img src="/images/Vectorcheck.png" /> <span>Team buildings</span>
            </div>
            <div className="check-image">
              <img src="/images/Vectorcheck.png" />{" "}
              <span>Opportunites for professional development</span>
            </div>
          </aside>
        </section>
      </main>

      <footer>
          
            
            </footer>

      <style jsx>{`
        main {
          width: 1440px;
          height: 1472px;
          padding: 100px 0 100px 120px;
        }

        p {
          margin: 0;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #001d6b;
        }

        h1 {
          width: 379px;
          margin: 16px 0 0 0;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
        }

        .title {
          height: 28px;
          margin-top: 60px;
        }

        .title-block {
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

        section {
          display: flex;
          margin-top: 15px;
        }

        aside {
          margin: 12px 0 0 32px;
        }

        .first-row {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #001d6b;
        }
        .items {
          width: 789px;
        }

        .check-image img {
          width: 17.6px;
          height: 13.4px;
        }

        .second-row {
          margin-top: 16px;
        }

        .check-image span {
          display: inline-block;
          margin-left: 13px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.7);
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
