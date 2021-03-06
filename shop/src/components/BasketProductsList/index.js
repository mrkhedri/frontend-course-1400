import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from "context/UserContext";
import {toPersianNum, toPriceNum} from "utils/numbers";
import {purchaseItems as list} from 'Pages/Home'

import "./style.scss"

function BasketProductsList() {
  const { basketList, setBasketList } = React.useContext(UserContext);

  const handleDeleteItem = id => {
    const item = basketList.find(p => p.id === id)

    const newBasketList = basketList.filter(p => p.id !== id)

    setBasketList(newBasketList);
  }

  const handleCount = (id, type) => {
    const item = basketList.find(p => p.id === id)
    const isPlus = type === 'plus'

    if (item.count === 5 && type === 'plus') return

    if (item.count === 1 && type === 'minus') {
      const text = "آیا میخواهید این محصول حذف شود؟"
      if (window.confirm(text)) handleDeleteItem(id)
      return
    }

    const newBasketList = basketList.map(p => {
      if (p.id === id) {
        const count = isPlus ? p.count + 1 : p.count - 1
        return { ...p, count }
      }
      return p
    })

    setBasketList(newBasketList);
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
                <i className="fa fa-plus countIcon" aria-hidden="true" onClick={() => handleCount(item.id, 'plus')}/>
                <div>{toPersianNum(item.count)}</div>
                {/*<input type="number" value="1"  />*/}
                <i className="fa fa-minus countIcon" aria-hidden="true" onClick={() => handleCount(item.id, 'minus')}/>

              </div>
              <div>{toPriceNum(toPersianNum((item.price) * (item.count)))}</div>
              {/*<DeleteIcon />*/}
              <i className="fa fa-remove icon open" aria-hidden="true" onClick={() => handleDeleteItem(item.id)}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BasketProductsList;