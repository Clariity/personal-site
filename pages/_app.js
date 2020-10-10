import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

import "../styles/global.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-vertical-timeline-component/style.min.css";

// Need to lazy load images or have a placeholder as they are causing page to jump while loading
// Add a did you know section in code snippets for stuff like "did you know you only had to do npm i package-name as --save was no longer needed after 1.??"
// Blog Post Sections/Categories (visually show them split) for Web Dev, PC Building
// Blog Post: Did you knows about PC building in PC building section (AIO positioning, XMP Profiling for RAM, Case Pressures)
// Blog Post: Useful VSCode extensions (Join Lines, Ipsum Lorem, Prettier, Live Share, Formatting Toggle) and shortcuts div.thisisaclassname + tab (play a gif to show this)
// Blog Post: Airflow/pressure, 3-pin cpu fan vs 4pin, aio mounting orientation, thermal paste application, fan sizes (120,140,240,360 ect)
// Change links to blue colour
// Cookie Notice if required
// Random Quotes on 404 page
// Sort out text alignments and keep constant justificication
// Sort out paddings so they are all the same (About page has a mix and match currently) --> (wrap higher components in max-1400)
// Add relevant description/link to ECS page and public facing projects to each module in education
// Hosting: https://vercel.com/#get-started https://nextjs.org/docs/deployment
// Cron: https://medium.com/@dbredvick/how-to-create-a-cron-job-with-nextjs-and-now-159aa973c00e -- Will need to allow CORS and set allowed origin to be the cron site, hopefully is a consistent url
// npm run analyse and see what bundle sizes are

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navigation />
      <span className="wave" id="wave" />
      <div className="fill-height-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
