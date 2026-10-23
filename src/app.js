
import { signal } from "./nova/reactivity.js";
import { element } from "./nova/component.js";
import { component } from "./nova/component-factory.js";

const app = document.querySelector("#app");
const [count, setCount] = signal(0);

const Greeting = component((props) => {
  return element("h1", {
    text: `Olá, ${props.name}!`,
  });
});

const greeting = Greeting({ name: "Nova" });

const counter = element("div", { className: "counter" }, [
  element("p", {
    text: "Nosso contador reativo:",
  }),

  element("p", {}, [
    element("span", {
      text: () => count(),
    }),
  ]),

  element("button", {
    text: "Adicionar 1",
    onClick: () => setCount(count() + 1),
  }),
]);

app.replaceChildren(greeting, counter);
