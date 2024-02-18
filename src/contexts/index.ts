import { Router } from "express";
import backendBoardController from "./backendBoard/backendBoard.controller";

const controllers = Router();

controllers.use("/board", backendBoardController);

export default controllers;
