import Header from "@/components/Header";
import Weather from "@/components/Weather";
import Location from "@/components/Location";

const App = () => {
  return (
    <div className="container mx-auto py-6 px-4 h-screen text-center">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <aside className="lg:w-1/4 p-10 bg-red-500">
          <Location />
        </aside>
        <div className="lg:w-3/4 p-10 bg-blue-500">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default App;
