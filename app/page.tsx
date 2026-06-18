import Nav         from "./components/Nav";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Photos      from "./components/Photos";
import Videos      from "./components/Videos";
import Shows       from "./components/Shows";
import MailingList from "./components/MailingList";
import Tech        from "./components/Tech";
import Footer      from "./components/Footer";
import Divider     from "./components/Divider";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider color="red" />
        <About />
        <Divider color="green" />
        <Photos />
        <Divider color="blue" />
        <Videos />
        <Divider color="red" />
        <Shows />
        <Divider color="green" />
        <MailingList />
        <Divider color="sky" />
        <Tech />
        <Divider color="blue" />
      </main>
      <Footer />
    </>
  );
}
