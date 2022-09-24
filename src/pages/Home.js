import React from 'react';
import Intro from "../components/Home";
import Roadmap from "../components/Roadmap";
import Free from "../components/Free";
import Team from "../components/Team";
import Faq from "../components/Faq";
import JoinUs from "../components/JoinUs";
import Blog from "../components/Blog";


const Home = () => {
  return (
    <>
      <Intro/>
      <div className='background'>
        {/* <Roadmap /> */}
      </div>
        <Free />
        {/* <Partners /> */}
        <Team />
        <Blog/>
      <Faq />
      <JoinUs />
    </>
  );
}

export default Home;
