import dbConnect from "../../lib/dbConnect";
import Country from "../../models/country";


export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const countries = await Country.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: countries });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case "POST":
    //   try {
    //     const country = await Country.create(req.body);
    //     res.status(201).json({ success: true, data: country });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
