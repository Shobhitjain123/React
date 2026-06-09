import { useState, useEffect, useMemo } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed TO load cart from local storage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to local storage:", error);
    }
  }, [cart]);

  useEffect(() => {
    const handleStorage = (e) => {
      try {
        if (e.key === "cart") {
          const newCart = JSON.parse(e.newValue || "[]");
          setCart(newCart);
        }
      } catch (error) {
        console.error("Failed to parse cart from local storage:", error);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((currentCart) => {
      return currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
    });
  };

  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => {
          const itemtotal = item.price * (item.quantity || 0);
          return sum + itemtotal;
        }, 0)
        .toFixed(2),
    );
  }, [cart]);

  return { cart, addToCart, removeFromCart, updateQuantity, total };
}
