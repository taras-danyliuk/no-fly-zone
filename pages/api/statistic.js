import dbConnect from "../../lib/dbConnect";
import Statistic from "../../models/statistic";


export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const statistics = await Statistic.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: statistics });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case "POST":
    //   try {
    //     const statistic = await Statistic.create(req.body);
    //     res.status(201).json({ success: true, data: statistic });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
