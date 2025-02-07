import { useNavigate } from "react-router-dom";
import Card from "../component/Card";
import BorderButton from "../component/Button";
import "../App.css";
import Counter from "../component/Counter";


export default function ProductMain() {
  const items = [
    {
      id: 1,
      link1: "#",
      image: "/img/gambar1.jpeg",
      link2: "#",
      name: "Sepatu Baru",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id facilis molestiae voluptas doloremque, debitis vitae! Voluptatibus neque, vel quis hic quam dolor consequuntur porro.",
      price: "Rp.1.000.000",
      nameInput: "Coba",
    },

    {
      id: 2,
      link1: "#",
      image: "/img/gambar1.jpeg",
      link2: "#",
      name: "Sepatu Baru",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id facilis molestiae voluptas doloremque, debitis vitae!",
      price: "Rp.1.000.000",
      nameInput: "Coba",
    },
  ];

  const navigate = useNavigate();
  const Email = localStorage.getItem("email")
  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    navigate("/login")
  }

  return (
    <div className="w-screen ">
      <div className="flex justify-center h-10 text-white items-center bg-slate-300">
        {Email}
        <BorderButton className="ml-5 bg-black" onClick={handleLogout} text="Logout"/>
      </div>
      <div className="flex justify-center gap-6">
        {items.map((item) => (
          <Card key={item.id}>
            <Card.Header link1={item.link1} image={item.image} />
            <Card.Body link2={item.link2} name={item.name} desc={item.desc} />
            <Card.Footer price={item.price} nameInput={item.nameInput} />
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Counter/> 
      </div>
    </div>
  );
}
