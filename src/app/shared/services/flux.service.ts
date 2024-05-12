import { Injectable } from '@angular/core';
import { Flux } from '../classes/flux';

@Injectable({
  providedIn: 'root'
})
export class FluxService {
  listFlux=[] as Flux[];
  constructor() { 

    //this.listFlux=JSON.parse(localStorage.getItem("flux")|| "");
    this.getFlux();
  }
  getFlux()
  {
    this.listFlux=JSON.parse(localStorage.getItem("flux")|| "");
  }
  addFlux(flux:Flux)
  {
    this.getFlux()
    this.listFlux.push(flux);
    localStorage.setItem("flux",JSON.stringify(this.listFlux));

  }
  /*
flux["element 1"] // initial
ajout 1 flux ["element 1"] (element): ["element2"] => ["element 1","element2"] (first push)
ajout 2 sans getFlux() (element) : ["element3"] => ["element 1","element3"] (first push)
ajout 2 avec getflux=> ["element 1","element2","element3"]

  */
 deleteFlux(index:number)
 {
  this.getFlux();
  this.listFlux.splice(index,1);
  localStorage.setItem("flux",JSON.stringify(this.listFlux));

 }
 updateFlux(index:number,flux:Flux)
 {
  this.getFlux();
  this.listFlux[index]=flux;
  localStorage.setItem("flux",JSON.stringify(this.listFlux));
  /*
  listFlux: ["element 1","element2","element3"]
  index :1
  flux="updated element"
    this.listFlux[index]=flux; => "element2"="updated element"
    =>
listFlux: ["element 1","updated element","element3"]
  */

 }
}

