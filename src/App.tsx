import React, { useEffect } from 'react';
import MarketPage from './components/MarketPage/MarkerPage';
import { useAppDispatch } from './store/hooks/hooks';
import { getItems } from './store/slices/itemSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])
  return (
    <MarketPage/>
  );
}

export default App;
