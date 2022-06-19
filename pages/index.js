import Head from "next/head";
import { useState } from "react";
import Item from "../components/item";
import * as Styled from "../styles/IndexStyle";

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
      <Styled.Main>
        <Styled.Paragraf>Open Vacancies</Styled.Paragraf>
        <Styled.H1>We are hiring!</Styled.H1>
        <Styled.Title className="title">
          <Styled.TitleFirstItem>Quality Assurance</Styled.TitleFirstItem>
          <Styled.TitleItem className="title-block">
            Engineering
          </Styled.TitleItem>
          <Styled.TitleItem className="title-block">
            Businnes Development
          </Styled.TitleItem>
        </Styled.Title>
        <Styled.Section>
          <Styled.Items className="items">
            {listItem.map((item) => {
              return (
                <div key={item.id}>
                  <Item item={item} changePlusBtn={changePlusBtn} />
                </div>
              );
            })}
          </Styled.Items>
          <Styled.Aside className="aside">
            <Styled.FirstRow className="first-row">
              BENEFIT IS BEING WRAISIT MEMBER
            </Styled.FirstRow>
            <Styled.SecondRow className="check-image second-row">
              <Styled.CheckedImg src="/images/Vectorcheck.png" />{" "}
              <Styled.CheckImageText>
                Flexible remote wroking schedule
              </Styled.CheckImageText>
            </Styled.SecondRow>
            <Styled.Checked className="check-image">
              <Styled.CheckedImg src="/images/Vectorcheck.png" />{" "}
              <Styled.CheckImageText>Health insurance</Styled.CheckImageText>
            </Styled.Checked>
            <Styled.Checked className="check-image">
              <Styled.CheckedImg src="/images/Vectorcheck.png" />{" "}
              <Styled.CheckImageText>Team buildings</Styled.CheckImageText>
            </Styled.Checked>
            <Styled.Checked className="check-image">
              <Styled.LastCheckedImg
                className="last-check-img"
                src="/images/Vectorcheck.png"
              />{" "}
              <Styled.LastCheckImageText className="Opportun">
                Opportunites for professional development
              </Styled.LastCheckImageText>
            </Styled.Checked>
          </Styled.Aside>
        </Styled.Section>
      </Styled.Main>
      <footer></footer>

     
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
  const getJobs = await fetch("http://localhost:3000/api/getAllJobs/");

  const result = await getJobs.json();

  return {
    props: { objectData: result.data },
  };
}
