let btn = document.getElementById("click");
let content = document.getElementById("count");
let count = 0;
btn.addEventListener("click", function () {
  count++;
  content.innerHTML = `So lan bam: ${count}`;
});
