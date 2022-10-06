import React, { useState, useMemo } from "react";

export const ItemsContext = React.createContext();

export function ItemsProvider({
  children,
}) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'William',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Rupert',
    },
    {
      id: 4,
      name: 'Olivia',
    },
    {
      id: 5,
      name: 'Nigel',
    },
    {
      id: 6,
      name: 'Sarah',
    },
    {
      id: 7,
      name: 'Katie',
    },
    {
      id: 8,
      name: 'Emma',
    },
    {
      id: 9,
      name: 'Jack',
    },
    {
      id: 10,
      name: 'Alex',
    },
  ]);

  const value = useMemo(
    () => ({
      getItems: () => new Promise((resolve) => setTimeout(
        () => resolve(items),
        1000,
      )),
      getItem: (id) => new Promise((resolve) => setTimeout(
        () => resolve(items.find((item) => item.id === id)),
        1000,
      )),
      deleteItem: (id) => new Promise((resolve) => setTimeout(
        () => resolve(setItems(items.filter((item) => item.id !== id))),
        1000,
      )),
    }),
    [items],
  );

  return (
    <ItemsContext.Provider value={ value }>
      {children}
    </ItemsContext.Provider>
  );
}
