import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../Provider/ItemsProvider";

export function ItemPage() {
  const routeParams = useParams();
  const { getItem } = useContext(ItemsContext);
  const [item, setItem] = useState();

  useEffect(
    () => {
      getItem(+routeParams.itemId).then(setItem);
    },
    [getItem, routeParams.itemId],
  );

  return (
    <span>{ item?.name }</span>
  );
}
