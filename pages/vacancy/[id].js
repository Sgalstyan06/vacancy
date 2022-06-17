import { useRouter } from "next/router";


export default function User({vacancy, descript}) {
  return (
    <div className="content">
      <div className="vacancy-title">{vacancy}</div>
      <div className="accordion-content">
        <div className="first-span">{descript.first_span}</div>
        <p>{descript.first_p}</p>
        <ul>
          <li>{descript.ul.first_li}</li>
          <li>{descript.ul.second_li}</li>
          <li>{descript.ul.third_li}</li>
          <li>{descript.ul.forth_li}</li>
        </ul>
        <p>{descript.second_p}</p>
        <span>{descript.second_span}</span>
        <span className="it-sector">{descript.third_span}</span>
      </div>

      <style jsx>
        {`
          .content {
            position: relative;
            width: 789px;
            height: 484px;
            margin-top: 17px;
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: 1px solid #1dca9d;
          }

          .accordion-content {
            width: 749px;
            height: 400px;
            margin: 20px 20px 15px 20px;
            padding: 0;
          }

          .vacancy-title {
            width: 376px;
            height: 34px;
            margin: 15px 393px 15px 20px;
            font-family: "Ubuntu";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            color: #121212;
          }

          .content span,
          ul > li {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: rgba(0, 0, 0, 0.7);
          }

          .content p {
            margin-top: 35px;
            margin-bottom: 35px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.7);
          }

          .it-sector {
            display: block;
          }

          @media screen and (max-width: 376px) {
            .accordion-content {
              width: 322px;
              height: 672px;
              margin: 20px 19px 16px 19px;
              padding: 0;
              line-height: 28px;
            }

            .content {
              width: 360px;
              height: 744px;              
              background: #ffffff;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border: 1px solid #1dca9d;
            }

            .vacancy-title {
              width: 251px;
              height: 18px;
              margin: 17px 21px 21px 16px;
              font-family: "Ubuntu";
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 18px;

              color: #121212;
            }

            
          .content p {
            margin-top: 45px;
            margin-bottom: 45px;            
          }
          }
        `}
      </style>
    </div>
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
