import React, { useEffect, useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component render hua ya count badla:", count);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
