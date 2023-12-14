const loaded = new Set();

export async function loadImage(image) {
  if (loaded.has(image)) return;
  await new Promise((res) => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      res(null);
    };
    loaded.add(image);

    // set timeout
    setTimeout(res, 5000);
  });
}
