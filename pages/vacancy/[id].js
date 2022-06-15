import { useRouter } from "next/router";
import fsPromises from "fs/promises";
import path from "path";
import Layout from "./layout";

export default function User({ descript, vacancy }) {
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
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 34px;
      color: #121212;
    }

    .content span, ul>li {
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
    }
  `}
      </style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), `user.json`);
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const data = objectData.filter((item) => item.id === +params.id);

  return {
    props: { descript: data[0].description, vacancy: data[0].vacancy },
  };
}
