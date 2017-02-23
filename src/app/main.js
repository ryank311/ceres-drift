import '../styles/main-styles.sass';

import Canvas from './game/base/Canvas';
import Renderer from './game/base/Renderer';
import DrawableManager from './game/base/DrawableManager';

console.log('Starting application');
const canvas = new Canvas('mainCanvas');
const drawManager = new DrawableManager(canvas);
const renderer = new Renderer(drawManager);

// Start the game
renderer.startGameThread();
