import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 gap-8 text-white w-screen h-screen">
        <div className="border border-sky-900 grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
        </div>
        <div>Map</div>
      </div>
    </>
  );
}
