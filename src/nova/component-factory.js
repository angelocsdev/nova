
export function component(render) {
  if (typeof render !== "function") {
    throw new TypeError(
      "Um componente Nova precisa ser uma função.",
    );
  }

  return function (props = {}) {
    const result = render(props);

    if (!(result instanceof Node)) {
      throw new TypeError(
        "O componente Nova precisa retornar um elemento do DOM.",
      );
    }

    return result;
  };
}
