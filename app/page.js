import Header from "./components/Header";
import LmsSection from "./components/LmsSection";
import Planning from "./components/Planning";
import SaleMarketing from "./components/SaleMarketing";
import Showcase from "./components/Showcase";
import TestBuider from "./components/TestBuider";
import Support from "./components/Support";

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Planning />
      <TestBuider />
      <SaleMarketing />
      <LmsSection />
      <Support />
    </>
  );
}
