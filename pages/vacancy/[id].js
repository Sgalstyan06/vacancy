import { useRouter } from "next/router";
import fsPromises from "fs/promises";
import path from "path";

export default function User({ descript }) {
  const a = useRouter();

  return <div>profession {descript}</div>;
}

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), `user.json`);
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const data = objectData.filter((item) => item.id === +params.id);

  return {
    props: { descript: data[0].description }, 
  };
}
