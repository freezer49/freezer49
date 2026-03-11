const videos = document.querySelector("video");
const canvas = document.getElementById("monCanvas");
const btn = document.getElementById("btnDownload");
navigator.mediaDevices.getUserMedia({ video: true });

Promise.getUserMedia().then((stream) => new Promise());

btn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
