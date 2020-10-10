import Home from "../components/home/Home";
import SEO from "../components/other/SEO";

export default function Index() {
  return (
    <div>
      <SEO title="home" />
      <Home />
    </div>
  );
}
