
import { effect } from "./reactivity.js";

export function element(tag, props = {}, children = []) {
  const el = document.createElement(tag);

  if (typeof props.text === "function") {
    effect(() => {
      el.textContent = props.text();
    });
  } else if (props.text !== undefined) {
    el.textContent = props.text;
  }

  if (props.className) {
    el.className = props.className;
  }

  if (props.onClick) {
    el.addEventListener("click", props.onClick);
  }

  for (const child of children) {
    el.append(child);
  }

  return el;
}
