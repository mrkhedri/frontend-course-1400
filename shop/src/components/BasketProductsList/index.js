import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from "context/UserContext";
import {toPersianNum, toPriceNum} from "utils/numbers";
import {purchaseItems as list} from 'Pages/Home'

import "./style.scss"

function BasketProductsList() {
  const { basketList, setBasketList } = React.useContext(UserContext);

  return (
    <div className="cl1">
      {!basketList.length ? (
        <div className='cl2'>محصولی در سبد خرید وجود ندارد</div>
      ) : (
        <div>
          {basketList.map((item, index) => (
            <div className="cl3" key={index}>
              <img className="img" src={item.srcMain} alt=""/>
              <div>{item.title}</div>
              <div>{toPriceNum(toPersianNum(item.price))}</div>
              <div>{toPersianNum(item.count)}</div>
              <div>{toPriceNum(toPersianNum((item.price) * (item.count)))}</div>
              <DeleteIcon />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BasketProductsList;