import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0)

  function getItemQuantity(id) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }

  function calculateTotal(newTotal) {
    console.log("NEWTOTAL: ", newTotal)
    setTotal(newTotal)
  }

  function clearItems() {
    setItems([])
  }

  function addItemQuantity(productInfo) {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === productInfo.id) == null) {
        return [...currentItems, productInfo];
      } else {
        return currentItems.map((item) => {
          if (item.id === productInfo.id) {
            return { ...item, quantity: item.quantity + productInfo.quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function increaseItemQuantity(id) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }

  function decreaseItemQuantity(id) {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity == 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItemQuantity(id) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        calculateTotal,
        getItemQuantity,
        addItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemQuantity,
        clearItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
