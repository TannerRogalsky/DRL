class ImageData {
  constructor(element, texture, x, y, width, height, sourceWidth, sourceHeight) {
    this.width = width;
    this.height = height;
    this.texture = texture;

    this.coords = [
      0, 0,
      0, height,
      width, height,
      width, 0
    ];

    this.uvs = [
      x / sourceWidth, y / sourceHeight,
      x / sourceWidth, (y + height) / sourceHeight,
      (x + width) / sourceWidth, (y + height) /sourceHeight,
      (x + width) / sourceWidth, y / sourceHeight
    ];
  }
}

export default ImageData;