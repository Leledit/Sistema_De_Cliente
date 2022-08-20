import { TabController } from "./controller/TabController.js";

export function $(caminho,tipo = "one"){
    if(tipo == "one"){
        return document.querySelector(caminho);
    }else{
        return document.querySelectorAll(caminho);
    }
}
const tabController = new TabController();

