function print(x, y, z, a = 0) {
  console.log(x, y, z, a);
}

let args = [1, 2, 3]

print(...args, 7)