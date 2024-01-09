import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {itemsActions} from "../store/index"

function FetchItems() {
  const fetchStatus = useSelector((state) => {
    return state.fetching;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch ("http://localhost:8080/items",{signal})
    .then((res)=>res.json())
    .then(({items})=>{
      dispatch(itemsActions.addinitialItems(items[0]));
    })
  }, []);
  return <div>FetchItems</div>;
}

export default FetchItems;
