import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HighLights from "./components/HighLights";
import Model from "./components/Model";

import * as Sentry from '@sentry/react'
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/Footer";

const App = () => {

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <HighLights/>
      <Model/>
      <Features/>
      <Chip/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);