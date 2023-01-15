import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 7, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const hendelDelete = (id) => {
    console.log("hendelDelete: ", id);
    const newCounter = counters.filter((c) => c.id !== id);
    console.log(newCounter);
    setCounters(newCounter);
  };
  const hendelReset = () => {
    setCounters(initialState);
    console.log("hendel reset");
  };

  const hendelIncrement = (id) => {
    const newCounter = counters.map((v, index) => {
      if (v.id === id) v.value += 1;
      return v;
    });
    setCounters(newCounter);
  };

  const hendelDecrement = (id) => {
    const newCounter = counters.map((v, index) => {
      if (v.id === id) v.value -= 1;
      return v;
    });
    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={hendelDelete}
          onIncrement={hendelIncrement}
          onDecrement={hendelDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={hendelReset}>
        Сброс
      </button>
    </>
  );
};
export default CounterList;
