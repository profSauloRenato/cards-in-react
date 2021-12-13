import React, { useState } from 'react';
import './CardBody.css'
import '../../assets/btnAdd.jpg'
import heartB from '../../assets/heartBlack.png'
import heartW from '../../assets/heartWhite.png'
import heartR from '../../assets/heartRed.png'


const CardBory = ({description, price, bestPrice, portion}) => {

  const [text, setText] = useState('ADICIONAR')
  const [cls, setCls] = useState('btn')
  const [wishlist, setWishlist] = useState(heartB)
  const [clswl, setClswl] = useState('wishlist')

  function handleAdd(){
    if(text == 'ADICIONAR'){
      setText('')
      setCls('btn btnAdd')
    }else{
      setText('ADICIONAR')
      setCls('btn')
    }
  }

  function handleWishlistA(){
    if(wishlist == heartB)
    setWishlist(heartR);
  }

  function handleWishlistB(){
    if(wishlist == heartW){
      setWishlist(heartB)
    }else{
      setWishlist(heartW)
    }
    if(clswl == 'wishlist')
    setClswl('wishlist active');
    if(clswl == 'wishlist active')
    setClswl('wishlist')
  }

  function handleWishlistC(){
    if(wishlist == heartR)
    setWishlist(heartB)
  }

  return (
    <div className="card-body">
      <div className={clswl} onMouseEnter={handleWishlistA} onClick={handleWishlistB} onMouseLeave={handleWishlistC}>
        <img src={wishlist} alt="" />
      </div>
      <h5 className="card-title">{description}</h5>
      <p className="card-text oldPrice">{price}</p>
      <p className="card-text bestPrice">{bestPrice}</p>
      <p className="card-text portion">
        em até <b>10x de {portion}</b> sem juros
      </p>
      <a className={cls} onClick={handleAdd}>
        {text}
      </a>
    </div>
  );
};

export default CardBory;
