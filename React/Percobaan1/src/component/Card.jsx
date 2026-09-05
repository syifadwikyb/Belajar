import { Link } from "react-router-dom";
import BorderButton from "./Button";

export default function Card({children}) {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 shadow rounded-lg flex flex-col justify-between">
        {children}
    </div>
  );
}

function Header({link1, image}) {
  return (
    <Link to={link1}>
      <img src={image} className="p-8 mx-auto" />
    </Link>
  );
}

function Body({link2, name, desc}) {
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={link2}>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-sm text-white">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({price, nameInput = "Add to cart"}) {
  return (
    <div className="flex items-center justify-between px-4 pb-4">
      <span className="text-2xl font-bold text-white">{price}</span>
      <BorderButton text={nameInput} />
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;