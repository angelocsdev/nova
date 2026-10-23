
import { signal, effect } from "./src/nova/reactivity.js";

const [count, setCount] = signal(0);

effect(() => {
  console.log("Contador:", count());
});

setCount(1);
setCount(2);
setCount(2);
