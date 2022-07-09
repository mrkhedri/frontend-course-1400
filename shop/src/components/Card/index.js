import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from "context/UserContext";
import {toPersianNum, toPriceNum} from "utils/numbers";
import {purchaseItems as list} from 'Pages/Home'

import "./style.scss"

function Card() {
  function groupObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const {ids, setIds} = React.useContext(UserContext);
  const shoopingList = []
  ids.forEach((id) => {
    shoopingList.push(list.find(p => p.id === id))
  });

  const groupedObj =  groupObjects(shoopingList, "id")
  const groupedList = Object.keys(groupedObj)
    .map(function(key) {
      return groupedObj[key];
    });

  return (
    <div className="cl1">
      {ids.length == 0 ?
        <div className='cl2'>محصولی در سبد خرید وجود ندارد</div>
        : <div>
          {groupedList.map((item, index) => (

            <div className="cl3" >
              <img className="img" src={item[0].srcMain} alt=""/>
              <div>{item[0].title}</div>
              <div>{toPriceNum(toPersianNum(item[0].price))}</div>
              <div>{toPersianNum(item.length)}</div>
              <div>{toPriceNum(toPersianNum((item[0].price)*(item.length)))}</div>
             <DeleteIcon />
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Card;