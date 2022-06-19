import * as Styled from "./style";

export default function User({vacancy, descript}) {
  return (
    <Styled.Content>
      <Styled.VacancyTitile>{vacancy}</Styled.VacancyTitile>
      <Styled.Accordion>
        <Styled.Text>{descript.first_span}</Styled.Text>
        <Styled.Paragraf>{descript.first_p}</Styled.Paragraf>
        <Styled.Ul>
          <li>{descript.ul.first_li}</li>
          <li>{descript.ul.second_li}</li>
          <li>{descript.ul.third_li}</li>
          <li>{descript.ul.forth_li}</li>
        </Styled.Ul>
        <Styled.Paragraf>{descript.second_p}</Styled.Paragraf>
        <Styled.Text>{descript.second_span}</Styled.Text>
        <Styled.ItSector>{descript.third_span}</Styled.ItSector>
      </Styled.Accordion>     
    </Styled.Content>
  );
}

export async function getServerSideProps(context ) {

 const data = await fetch("http://localhost:3000/api/getAllJobs/");
 const res = await data.json(); 
 const dataItem = res.data.filter(item => item.id == context.params.id);
 
  return {
    props: {vacancy:dataItem[0].vacancy, descript: dataItem[0].description},
  };
}
