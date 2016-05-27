import {Component} from 'angular2/core';
import {DialogComponent} from './dialog.component';

@Component({
    selector: 'my-app',
    template: `<h1>App03</h1>
               <button (click)="onClick()" [(ngModel)]="toggle" class="btn btn-default" >Toggle</button>  
               <span class="pull-right">was clicked!</span>       
    `,
    directives:[DialogComponent]
})
export class AppComponent { 
    
     bodyText: string;
     displayValue : string;
     statusDialog : boolean;
     toggle = true;
     onClick () {
        this.toggle = !this.toggle;
    }
}
