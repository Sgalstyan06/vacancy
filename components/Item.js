import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import * as Styled from "./styleItem";

export default function Item({ item, changePlusBtn }) {
  const [showContent, SetShowContent] = useState(false);
  const ref = useRef(null);
  const [MainBlock, setMainBlock]  = useState(Styled.MainItem);

  function openDescription(id) {
    
    if (!showContent) {

      setMainBlock( Styled.Descript);
      SetShowContent((prev) => !prev);

    } else {    

      setMainBlock( Styled.MainItem);
      SetShowContent((prev) => !prev);

    }
    changePlusBtn(id);
  }

  return (
    < MainBlock ref={ref} >
      <Styled.Item>
        <Link href={`/vacancy/${item.id}`}>
          <Styled.Anchor>
            <Styled.VacancyTitle >{item.vacancy}</Styled.VacancyTitle>
            <div >
              <Styled.AccordContent >
                <Styled.AccordionText>
                  {item.description.first_span}
                </Styled.AccordionText>
                <Styled.BlockP>{item.description.first_p}</Styled.BlockP>
                <Styled.AccordionUl>
                  <li>{item.description.ul.first_li}</li>
                  <li>{item.description.ul.second_li}</li>
                  <li>{item.description.ul.third_li}</li>
                  <li>{item.description.ul.forth_li}</li>
                </Styled.AccordionUl>
                <Styled.BlockP>{item.description.second_p}</Styled.BlockP>
                <Styled.AccordionText>{item.description.second_span}</Styled.AccordionText>
                <Styled.ItSector >{item.description.third_span}</Styled.ItSector>
              </Styled.AccordContent>
            </div>
          </Styled.Anchor>
        </Link>
      </Styled.Item>
      <Styled.Btn >
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
