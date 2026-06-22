import Nav    from "../components/Nav";
import Tech   from "../components/Tech";
import Footer from "../components/Footer";

export default function TechPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Tech />
      </main>
      <Footer />
    </>
  );
}