import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Countries from "@/components/Countries";
import Chart from "@/components/Chart";

function App() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-[1200px] h-screen text-center">
      <Header />
      <div className="mb-8">
        <Cards />
      </div>
      <div className="mb-8">
        <Countries />
      </div>
      <div className="mb-8">
        <Chart />
      </div>
    </div>
  );
}

export default App;
