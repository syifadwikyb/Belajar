import Card from "../component/Card";

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

  return (
    <div className="w-screen min-h-full flex justify-center gap-6">
      {items.map((item) => (
        <Card>
          <Card.Header link1={item.link1} image={item.image}/>
          <Card.Body link2={item.link2} name={item.name} desc={item.desc} />
          <Card.Footer price={item.price} nameInput={item.nameInput} />
        </Card>
      ))}
    </div>
  );
}
