// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityApi } from "../../helpers/api";

type Data = {
  name: string;
};

const query = encodeURIComponent(`*[_type=="person"]{
    _createdAt,
    _id, 
    _updatedAt,
    birthDate,
    isAlive,  
    nameFa,
    arrestDate,
    killedDate,
    sloganFa,
    url1,
    url2,
    image1{asset->{path,url}},
   image2{asset->{path,url}},
    image3{asset->{path,url}}, 
    descriptionFa
  }`);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await sanityApi.get(`/data/query/production?query=${query}`);
  if (result.status === 200) {
    return res.status(200).json(result.data.result);
  }
  res.status(400).send("failed to retrive data");
}
