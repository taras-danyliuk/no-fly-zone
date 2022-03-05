import Head from 'next/head'

import dbConnect from "../lib/dbConnect";
import Statistic from "../models/statistic";
import Country from "../models/country";
import Clock from "../components/Clock/Clock";
import Section from "../components/Section/Section";
import CountryRow from "../components/CountryRow/CountryRow";
import { useMemo } from "react";


export default function Home(props) {
  const casualties = useMemo(() => props.statistics.filter(s => s.section === "Casualties"), [props.statistics]);
  const refugees = useMemo(() => props.statistics.filter(s => s.section === "Refugees"), [props.statistics]);


  return (
    <div className="h-100">
      <Head>
        <title>No Fly Zone</title>
        <meta name="description" content="Close the sky above Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Clock/>

      <div className="flex-column align-stretch">
        <Section name="Casualties by that time:" items={casualties}/>

        <Section name="Refugees:" items={refugees}/>
      </div>

      <div className="flex-column align-stretch">
        <h3 className="text-center">Votes:</h3>

        {props.countries.map(country => <CountryRow key={country.name} country={country}/>)}
      </div>
    </div>
  )
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

  const countriesResult = await Country.find({}).lean();
  const countries = countriesResult.map(doc => ({
    ...doc,
    _id: doc._id.toString(),
    date: doc.date.toISOString()
  }));

  return { props: { statistics, countries } };
}
