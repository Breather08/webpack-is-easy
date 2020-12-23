import { smth } from "./test";
import "./styles/style.css";
import randomPicture from "./assets/some_picture.jpeg";

const img = document.createElement("img");
img.src = randomPicture;
document.body.append(img);

smth("ho ho ho");
