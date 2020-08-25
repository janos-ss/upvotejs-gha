function foo(a) {
  return bar(a, a);
}

function bar() {
  return foo();
}
