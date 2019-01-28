import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
alloNewServer = true;
serverCreated =false;
serverName = '';
servers = ['server1','server1','server1','server1','server1','server1','server1','server1','server1'];
  constructor() {

    setTimeout(()=>{
      this.alloNewServer = false;
    },2000)
   }

   onUpdateServerName(event:any){
     debugger;
     console.log(event);
   }

   onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
   }

  ngOnInit() {
  }

}
