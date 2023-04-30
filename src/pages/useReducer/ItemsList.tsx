import React, { useReducer } from 'react';

interface Item {
  id: number;
  text: string;
}

interface Action {
  type: 'ADD_ITEM' | 'DELETE_ITEM';
  payload?: Item;
}

interface State {
  items: Item[];
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload as Item] };
    case 'DELETE_ITEM':
      return {
        items: state.items.filter((item) => item.id !== action.payload!.id),
      };
    default:
      return state;
  }
}

function ItemsList() {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const addItem = () => {
    const newItem = {
      id: state.items.length + 1,
      text: `Item ${state.items.length + 1}`,
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  }

  const deleteItem = (item: Item) => {
    dispatch({ type: 'DELETE_ITEM', payload: item });
  }

  return (
    <div>
      <button onClick={addItem}>항목 추가</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => deleteItem(item)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemsList;
