import React from "react";
import './Card.css';
import Image from '../Image'
import CardBory from "../CardBory";
import monitor1 from '../../assets/monitor1.jpg'
import monitor2 from '../../assets/monitor2.jpg'
import monitor3 from '../../assets/monitor3.jpg'
import monitor4 from '../../assets/monitor4.png'


const products = {
  product1: {
    description:
      "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240Hz HDMI, DP, Gsync Série CRG50",
    price: "R$2813,99",
    bestPrice: "R$2599,00",
    portion: "R$259,90",
  },
  product2: {
    description:
      "Monitor LED 24'' Gamer Samsung LS24D332HSX/ZD 1920x1080 1ms 75hz",
    price: "R$1499,99",
    bestPrice: "R$1424,00",
    portion: "R$142,40",
  },
  product3: {
    description:
      "Monitor LED 27'' Dell Professional IPS P2719H Full HD - Preto",
    price: "R$1699,99",
    bestPrice: "R$1599,00",
    portion: "R$159,90",
  },
  product4: {
    description:
      "Monitor LED 29'' LG Ultrawide 21:9 com HDR 10 IPS Full HD - 29WK600",
    price: "R$1899,99",
    bestPrice: "R$1799,00",
    portion: "R$179,90",
  },
};


function Card() {
  return (
    <div className="cards">
      <div className="card" >
        <Image src={monitor1} alt={"Foto do produto"}/>
        <CardBory 
          description={products.product1.description} 
          price={products.product1.price}
          bestPrice={products.product1.bestPrice}
          portion={products.product1.portion}
        />
      </div>
      <div className="card" >
        <Image src={monitor2} alt={"Foto do produto"}/>
        <CardBory 
          description={products.product2.description} 
          price={products.product2.price}
          bestPrice={products.product2.bestPrice}
          portion={products.product2.portion}
        />
      </div>
      <div className="card" >
        <Image src={monitor3} alt={"Foto do produto"}/>
        <CardBory 
          description={products.product3.description} 
          price={products.product3.price}
          bestPrice={products.product3.bestPrice}
          portion={products.product3.portion}
        />
      </div>
      <div className="card" >
        <Image src={monitor4} alt={"Foto do produto"}/>
        <CardBory 
          description={products.product4.description} 
          price={products.product4.price}
          bestPrice={products.product4.bestPrice}
          portion={products.product4.portion}
        />
      </div>
    </div>
  );
}

export default Card;
