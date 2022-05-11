const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timer = 100;
for (let i = 0; i < array.length; i++) {
  let char = array[i];
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 200;
}