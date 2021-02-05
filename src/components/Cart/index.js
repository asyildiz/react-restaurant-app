import React from "react";
import Money from "../../plugins/Money";
import Icon from "../Icon";
import Input from "../Input";
import Button from "../Button";
import "./style.scss";

const Cart = ({ address, items, onQuantityChange, onRemoveClick }) => {
  return (
    <div className="cart">
      <div className="header">
        <span>YEMEK SEPETİM</span>
      </div>
      <div className="location">
        <span> {address}</span>
      </div>
      {items.length === 0 ? (
        <div className="no-item">
          <Icon iconName="empty-basket" />
          <span>Sepetiniz henüz boş.</span>
        </div>
      ) : (
        <>
          <table>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.name}>
                    <td className="title">
                      <a> {item.name} </a>
                      <span> {item.description} </span>
                    </td>
                    <td className="count">
                      <Input
                        type="number"
                        initialValue={item.quantity}
                        onChange={(quantity) =>
                          onQuantityChange({ ...item, quantity })
                        }
                      />
                    </td>
                    <td className="price">
                      {Money.dotToComma(
                        item.quantity * Money.commaToDot(item.price)
                      )}
                      TL
                    </td>
                    <td className="row-actions">
                      <Icon
                        iconName="small-close"
                        onClick={() => onRemoveClick(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total">
            <span>Toplam</span>
            <span>
              {Money.dotToComma(
                items.reduce((sum, item) => {
                  sum += item.quantity * Money.commaToDot(item.price);
                  return sum;
                }, 0)
              )}
              TL
            </span>
          </div>

          <div className="actions">
            <Button extraClasses="confirm-basket" content="SEPETİ ONAYLA" />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
