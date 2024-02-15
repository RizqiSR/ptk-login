import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}