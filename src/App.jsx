import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="flex items-center bg-[#f4e9e1]">
      <Navigation />
      <div className="items-start flex flex-col h-screen justify-start overflow-x-hidden overflow-y-auto absolute w-[calc(100%_-_262px)] z-[900] pl-28 pr-9 pt-6 left-[118px] top-0">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
