import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../Provider/ItemsProvider";

export function ItemsPage() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState('');
  const { getItems, deleteItem } = useContext(ItemsContext);

  useEffect(
    () => {
      getItems()
        .then((newItems) => newItems.sort(
          (a, b) => {
            if (a[sort] === b[sort]) {
              return 0;
            }
            return a[sort] > b[sort] ? 1 : -1;
          }
        ))
        .then(setItems);
    },
    [getItems, setItems, sort],
  );

  return (
    <div>
      <label>
        Sort
        <select onChange={ (event) => setSort(event.currentTarget.value) }>
          <option value=""></option>
          <option value="id">ID</option>
          <option value="name">NAME</option>
        </select>
      </label>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { items.map((item, index) => (
            <tr key={ item.id }>
              <td>{ item.id }</td>
              <td>{ item.name }</td>
              <td><a className="view-button" href={ "/item/" + item.id }>View</a></td>
              <td><a href="javascript:void(0)" onClick={ () => deleteItem(index) }>Delete</a></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
