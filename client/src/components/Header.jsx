import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  MdOutlineFullscreen,
  MdOutlinePowerSettingsNew,
  MdDehaze,
} from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  console.log(path);

  return (
    <Navbar className="bg-white">
      {path === '/dashboard' || path === '/sign-in' || path === '/sign-up' ? (
        <Link>
          <img
            src="./src/assets/ptk-logo-berwarna.png"
            alt="Pertamina Trans Kontinental Logo Berwarna"
            className="w-32"
          />
        </Link>
      ) : ''}
      <div>
        <p className="text-neutral-400 font-semibold text-sm">PRIDE:</p>
        <h3>Portal Realtime Integrated Data Enterprise</h3>
      </div>

      <div className="flex gap-2">
        {path === "/dashboard" ? (
          <>
            <Button color="gray" size="sm" className="w-10 h-10">
              <MdOutlineFullscreen />
            </Button>
            <Button color="gray" size="sm" className="w-10 h-10">
              <MdOutlinePowerSettingsNew />
            </Button>
            <Button color="gray" size="sm" className="w-10 h-10">
              <MdDehaze />
            </Button>
          </>
        ) : path === '/sign-in' || path === '/sign-up' ? (
          <Link to='/'>
            <Button className="bg-sky-800">Home</Button>
          </Link>
        ) : (
          <Link to='/sign-in'>
            <Button className="bg-sky-800">Sign In</Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
}
