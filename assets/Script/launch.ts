import Client from "./client";
import Utils from "./utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

  
    @property([cc.Node])
    listNodeView: Array<cc.Node> = []

    start () {

        Client.onWindowResize()
        cc.debug.setDisplayStats(false)
    }

    onToggleChangeView(sender, custdata) {

        console.warn(`on button change view :${custdata}`)
        console.warn("create userid :", Utils.createUserId())
        custdata = +custdata

        for (let index = 0; index < this.listNodeView.length; index++) 
            this.listNodeView[index].active = index == custdata
    }

}
