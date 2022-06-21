import * as Styled from "./style";

export default function User({ vacancy, description, message }) {
  console.log("message", message);
  return (
    <Styled.Content>
      { message ? <Styled.Message>{message}</Styled.Message>  : <div> <Styled.VacancyTitile>{vacancy}</Styled.VacancyTitile>
      <Styled.Accordion>
        <Styled.Text>{description.hiring}</Styled.Text>
        <Styled.Paragraf>{description.requirment}</Styled.Paragraf>
        <Styled.Ul>
          {description["soft-skills"].map((elem, index) => {
            return <li key={index}>{elem}</li>
          })}
        </Styled.Ul>
        <Styled.Paragraf>{description.advatages}</Styled.Paragraf>
        <Styled.Text>{description.language}</Styled.Text>
        <Styled.ItSector>{description.it}</Styled.ItSector>
      </Styled.Accordion></div>}
      
    </Styled.Content>
  );
}

export async function getServerSideProps(context) {
  const id = parseInt(context.query.id);
  const data = await fetch(`http://localhost:3000/api/vacancy/${id}`);
  const result = await data.json();

return  (result.vacancy && result.description) ? {
    props: { vacancy: result.vacancy, description: result.description }
  } : {props: {message: result.message}}
}
