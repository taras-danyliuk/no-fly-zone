import Head from "next/head";
import Script from "next/script";
import { SlideHome } from "../slides/home";
import dbConnect from "../lib/dbConnect";
import Statistic from "../models/statistic";
import Info from "../models/info";
import Statistics from "../slides/statistics/Statistics";
import Images from "../slides/images/Images";
import Share from "../slides/share/Share";
import Main from "../slides/main/Main";


export default function Index({ info, statistics }) {
  return (
    <main>
      <Head>
        <title>No Fly Zone</title>
        <meta name="description" content="Close the sky over Ukraine"/>
        <meta property="og:title" content="No Fly Zone" />
        <meta property="og:description" content="Close the sky over Ukraine" />
        <meta property="og:url" content="https://www.noflyzone.info/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.noflyzone.info/images/thumb.jpg" />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="691"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="https://www.noflyzone.info/images/thumb.jpg"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GNEED0KWRW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GNEED0KWRW');
        `}
      </Script>

      <Main kids={info.kids}/>
      <SlideHome info={info}/>
      <Statistics statistics={statistics}/>
      <Images/>
      <Share/>
    </main>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const statisticsResult = await Statistic.find({}).lean();
  const statistics = statisticsResult.map(doc => ({
    ...doc,
    _id: doc._id.toString(),
    breakpoints: doc.breakpoints.map(br => ({
      ...br,
      _id: br._id.toString()
    }))
  }));


  const info = {
    kids: { name: "Kids killed", currentNumber: 0 },
    adults: { name: "Adults killed", currentNumber: 0 },
    injured: { name: "People injured", currentNumber: 0 },
    refugees: { name: "Refugees", currentNumber: 0 }
  }
  const infoResult = await Info.find({}).lean();
  infoResult.forEach(doc => {
    if (doc.name === "Kids killed") info.kids = { ...doc, _id: doc._id.toString(), updatedAt: doc.updatedAt.toString() };
    else if (doc.name === "Adults killed") info.adults = { ...doc, _id: doc._id.toString(), updatedAt: doc.updatedAt.toString() };
    else if (doc.name === "People injured") info.injured = { ...doc, _id: doc._id.toString(), updatedAt: doc.updatedAt.toString() };
    else if (doc.name === "Refugees") info.refugees = { ...doc, _id: doc._id.toString(), updatedAt: doc.updatedAt.toString() };
  });

  return { props: { statistics, info } };
}
