function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

function fibonacci_dp(position) {
  var f = [];
  f[0] = 0;
  f[1] = 1;
  for (var i = 2; i <= position; i++) f[i] = f[i - 1] + f[i - 2];
  return f[position];
}

module.exports = { fibonacci, fibonacci_dp };
