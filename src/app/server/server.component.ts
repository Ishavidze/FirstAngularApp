import {Component } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{  
    serverId = 10;
    serverType = "offLine";  

    constructor(){
        var rand = Math.random();
        console.log(rand);
        this.serverType = Math.random()>0.5?'online':'offLine'
    }

    getServerStatus(){
        return this.serverType;
    }

    getColor(){
        return this.serverType =='online'?'green':'red';
    }
}