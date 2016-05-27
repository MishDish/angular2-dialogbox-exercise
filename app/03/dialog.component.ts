import {Component,Input,Output,EventEmitter} from 'angular2/core'; 

@Component({ 
    selector:'dialogbox',
    
    template:`
    
         <div class="dialogbox" [(ngModel)]="toggle" *ngIf="toggle">
          <i (click)="onClick(buttonValues.close)" class="glyphicon glyphicon-remove pull-right close"></i>   
           <h4>Dialogbox</h4>
  
           <div  class="body-dialog">
               <ng-content select=".body"></ng-content>
           </div>
               <button (click)="onClick(buttonValues.ok)"  class="btn btn-default ">{{ buttonValues.ok }}</button>
               <button (click)="onClick(buttonValues.cancel)" class="btn btn-default ">{{ buttonValues.cancel}}</button>    
         </div>      
    `,  
    styles:[
      `
       .dialogbox{
          margin :10px; 
          border : 5px solid gray;
          padding: 10px; 
       }
       .body-dialog{
           padding-top:10px;
           min-height:50px;
       }
      `
    ]
})

export class DialogComponent{
     isHidden : boolean = true;
     buttonValues : {[key:string] : string} = {
         ok : 'ok',
         cancel : 'cancel',
         close   : 'close'
     }
     
    //  @Output() buttons  = new EventEmitter();
    //  onClick(buttonValue : string ) : void {
    //    this.buttons.emit({ newState : this.isHidden , newValue : buttonValue })
    //  }
}