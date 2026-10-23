
let activeEffect = null;

export function signal(initialValue) {
  let value = initialValue;
  const subscribers = new Set();

  function get() {
    if (activeEffect) {
      subscribers.add(activeEffect);
    }

    return value;
  }

  function set(newValue) {
    if (Object.is(value, newValue)) {
      return;
    }

    value = newValue;

    for (const subscriber of [...subscribers]) {
      subscriber();
    }
  }

  return [get, set];
}

export function effect(callback) {
  function run() {
    activeEffect = run;

    try {
      callback();
    } finally {
      activeEffect = null;
    }
  }

  run();
}
