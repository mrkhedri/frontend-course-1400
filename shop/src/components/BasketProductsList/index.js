import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from "context/UserContext";
import {toPersianNum, toPriceNum} from "utils/numbers";
import {purchaseItems as list} from 'Pages/Home'

import "./style.scss"

function BasketProductsList() {
  const {basketList, setBasketList} = React.useContext(UserContext);
  const handleDeletItem = (e, index) => {
    basketList.splice(index, 1);
    setBasketList([...basketList]);
  }

  const handlePlusCount = (e, index) => {
    if (basketList[index].count < 5)
      basketList[index].count++;
    setBasketList([...basketList]);
  }

  const handleMinusCount = (e, index) => {
    if (--basketList[index].count < 1)
      handleDeletItem(e, index)
    setBasketList([...basketList]);
  }

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
              <div className="count">
                <i className="fa fa-plus countIcon" aria-hidden="true" onClick={(e) => {
                  handlePlusCount(e, index)
                }}/>
                <div>{toPersianNum(item.count)}</div>
                {/*<input type="number" value="1"  />*/}
                <i className="fa fa-minus countIcon" aria-hidden="true" onClick={(e) => {
                  handleMinusCount(e, index)
                }}/>

              </div>
              <div>{toPriceNum(toPersianNum((item.price) * (item.count)))}</div>
              {/*<DeleteIcon />*/}
              <i className="fa fa-remove icon open" aria-hidden="true" onClick={(e) => {
                handleDeletItem(e, index)
              }}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BasketProductsList;