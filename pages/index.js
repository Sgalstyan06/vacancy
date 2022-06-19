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
        <Styled.Title>
          <Styled.TitleFirstItem>Quality Assurance</Styled.TitleFirstItem>
          <Styled.TitleItem>
            Engineering
          </Styled.TitleItem>
          <Styled.TitleItem>
            Businnes Development
          </Styled.TitleItem>
        </Styled.Title>
        <Styled.Section>
          <Styled.Items>
            {listItem.map((item) => {
              return (
                <div key={item.id}>
                  <Item item={item} changePlusBtn={changePlusBtn} />
                </div>
              );
            })}
          </Styled.Items>
          <Styled.Aside>
            <Styled.FirstRow className="first-row">
              BENEFIT IS BEING WRAISIT MEMBER
            </Styled.FirstRow>
            <Styled.SecondRow>
              <Styled.CheckedImg src="/images/Vectorcheck.png" />
              <Styled.CheckImageText>
                Flexible remote wroking schedule
              </Styled.CheckImageText>
            </Styled.SecondRow>
            <Styled.Checked>
              <Styled.CheckedImg src="/images/Vectorcheck.png" />
              <Styled.CheckImageText>Health insurance</Styled.CheckImageText>
            </Styled.Checked>
            <Styled.Checked>
              <Styled.CheckedImg src="/images/Vectorcheck.png" />
              <Styled.CheckImageText>Team buildings</Styled.CheckImageText>
            </Styled.Checked>
            <Styled.Checked>
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
