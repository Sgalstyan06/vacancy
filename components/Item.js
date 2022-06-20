import React from "react";
import Link from "next/link";
import { useState } from "react";
import * as Styled from "./styleItem";

export default function Item({ item, changePlusBtn }) {
  const [showContent, SetShowContent] = useState(false);  
  const [MainBlock, setMainBlock] = useState(Styled.MainItem);

  function openDescription(id) {
    if (!showContent) {
      setMainBlock(Styled.Descript);
      SetShowContent((prev) => !prev);
    } else {
      setMainBlock(Styled.MainItem);
      SetShowContent((prev) => !prev);
    }
    changePlusBtn(id);
  }

  return (
    <MainBlock >
      <Styled.Item>
        <Link href={`/vacancy/${item.id}`}>
          <Styled.Anchor>
            <Styled.VacancyTitle>{item.vacancy}</Styled.VacancyTitle>
            <div>
              <Styled.AccordContent>
                <Styled.AccordionText>
                  {item.description.hiring}
                </Styled.AccordionText>
                <Styled.BlockP>{item.description.requirment}</Styled.BlockP>
                <Styled.AccordionUl>
                  {item.description["soft-skills"].map((elem, index) => <li key = {index}>{elem}</li>)}
                </Styled.AccordionUl>
                <Styled.BlockP>{item.description.advatages}</Styled.BlockP>                     
                <Styled.AccordionText>
                  {item.description.language}
                </Styled.AccordionText>
                <Styled.ItSector>{item.description.it}</Styled.ItSector>
              </Styled.AccordContent>
            </div>
          </Styled.Anchor>
        </Link>
      </Styled.Item>
      <Styled.Btn>
        <Styled.Button
          onClick={() => {
            openDescription(item.id);
          }}
        >
          <img src={item.show_description_button} />
        </Styled.Button>
      </Styled.Btn>
    </MainBlock>
  );
}
