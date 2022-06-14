import { useRouter } from "next/router";
import fsPromises from "fs/promises";
import path from "path";
import Layout from "./layout";

export default function User({ descript }) {
  // const a = useRouter();

  return <Layout className="content"> {descript}</Layout>;
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

{
  /* <style jsx>{`
    .content {
      background: red;
    }
  `}
</style> */
}
