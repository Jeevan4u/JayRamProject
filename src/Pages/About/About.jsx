import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import imageAbout from "../../components/Header/images/1675391709487.jpg";
import self from "../../components/Header/images/1675391709444.jpg";
import "./About.css";
import Youtubecard from "../../components/YoutubeCard/Youtubecard";

const About = () => {
  const aboutBanner = {
    img: imageAbout,
    title: "Home > About",
  };
  const youtubeData = {
    heading: "JayRam Tutorials",

    ytlink:
      "https://www.youtube.com/embed/05TBvieGcVw?list=PLQQzquR9RdZlKRlWeTzTkpmzz8egSbUjw",
    title:
      "Nepali Drum Tutorial/Introduction on How to hold Drumsticks/Episode 1",
  };
  return (
    <div className="Aboutpage">
      <Banner bannerData={aboutBanner} />
      <div className="about-section my-5 py-2">
        <div className="heading text-center py-4">
          <h1>JayRam Karki Bio </h1>
        </div>
        <div className="Maincontents-wrapper px-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-container">
                <img src={self} alt="" />
              </div>
            </div>
            <div className="col-lg-6 px-2">
              <div className="desc">
                <h1>About Jay</h1>
                <p>
                  JayRam Karki is a drummer, composer and bandleader born and
                  based in Nepal,Kathmandu who is rapidly establishing himself
                  as an exciting voice in the city's diverse music scene. Having
                  performed with many notable Nepali and Indian musicians,
                  including Petros Klampanis, André White, Sasha Berliner,
                  Jean-Michel Pilc, Kevin Dean, Mike Rud, Yesseh Furaha-Ali and
                  Josh Rager, as well as members of Canada’s folk music scene,
                  such as Connie Kaldor, Aleksi Campagne and Folle Avoine, he is
                  equally at home performing in contemporary Jazz and
                  experimental contexts as he is in folk, Pop and Rock settings.
                  JayRam leads the trio "Dolman / Rossy / Jobin", in which he is
                  joined by vocalists Sarah Rossy and Eugénie Jobin. Are You
                  Here to Help?, The group's first album—JayRam 's second as
                  leader, composer, and now lyricist—was released on March 18,
                  2022 and premiered at the OFF Festival de Jazz de Montréal,
                  where the group won the François-Marcaurelle Award. The album
                  is a journey into the uniquely evocative qualities of drums
                  and the human voice—brought into sharp focus by the group’s
                  strikingly minimalistic instrumentation. JayRam ’s
                  compositions and original lyrics blur the line between notated
                  and improvised performance, and probe the expressive power of
                  taking and giving Space. In his own words: “This is music
                  about space. The space between each note, each word, each
                  breath. Between what was, what is, and what could be. The
                  gentle potency of silence. This is music about the spaces that
                  hold the ones we love and that are left empty when they are
                  lost.” LISTEN to the album or WATCH the album trailer to learn
                  more about the project. JayRam 's debut album, Nostalgia and
                  Other Fantasies, was released in November of 2019. Inspired by
                  the feelings of nostalgia that are stirred up when sifting
                  through old family photos or driving through the Canadian
                  prairies, JayRam weaves together two of his great musical
                  loves—Folk and Jazz—to create songs that sway between
                  evocative melodies, engaging improvisations and delicate
                  soundscapes. The album features his 5-piece chamber-folk
                  ensemble, which includes Caitlin Smith on viola, Zacharie
                  Bachand and Marcus Savard-Lowry on acoustic and electric
                  guitars, and Mathieu McConnell on bass.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Youtubecard ytData={youtubeData} />

        <div className="sub">
          <p>
            LISTEN to the album or WATCH the album trailer. Between September of
            2021 and September of 2022 JayRam lived in Basel, Switzerland where
            he was a member of FocusYear, a unique year-long music residency
            that assembles an 8-piece international ensemble that works and
            performs with a remarkable roster of visiting artists, under the
            musical direction of acclaimed Austrian guitarist Wolfgang
            Muthspiel. These include many of today's most pre-eminent Jazz
            musicians and composers, the likes of JayRam Parks, Lionel Loueke,
            Chris Cheek, Kris Davis, Larry Grenadier, Guillermo Klein, Linda May
            Han Oh, Jorge Rossy, Becca Stevens, and many others. During that
            year, the ensemble also released Tiny Windows, a collective album of
            their own compositions, under the German Neuklang label. Tiny
            Windows can be heard HERE. JayRam has been the recipient of a number
            of awards and accolades, most notably the Lou Williamson Jazz Award
            (2017), The Schulich School of Music Award for Outstanding
            Achievement in Performance (2017) and three Schulich School of Music
            Scholarships 2016, 2017 and 2018. He also holds a Bachelor of Music
            in Jazz Performance from McGill University, where he was a member of
            the school's flagship ensemble - the Jazz Orchestra 1 - led by
            Juno-winning composer Christine Jensen. Alayne McGregor of
            ottawajazzscene.ca praised JayRam ’s “powerful drumming” as a
            driving force of that “hard-swinging” and “vibrant” ensemble. In his
            final year of studies, he was invited to share the stage with
            McGill’s 2019 Catherine Thornhill Steele Guest Artist, acclaimed
            trumpeter and composer Ambrose Akinmusire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
