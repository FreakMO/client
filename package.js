
import {_} from "./js/_.js";

import {GameClient} from "./js/system/GameClient.js";
import {Render} from "./js/system/Render.js";
import {Controls} from "./js/system/Controls.js";
import {Scene} from "./js/system/Scene.js";
import {Grid} from "./js/system/Grid.js";
import {Camera} from "./js/system/Camera.js";

import {ServerNotification} from "./js/system/ServerNotification.js";

window._ = _;

window.GameClient = GameClient;
window.Render = Render;
window.Controls = Controls;
window.Scene = Scene;
window.Grid = Grid;
window.Camera = Camera;

window.ServerNotification = ServerNotification;
