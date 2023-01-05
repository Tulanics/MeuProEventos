import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  widthImg: number = 100;
  marginImg = 1;
  showImg: boolean = true
  private _filterList: string = '';

  public get filterList(): string {

    return this._filterList
  }

  public set filterList(value:string){
    this._filterList = value;
    this.eventosFiltrados = (this.filterList ? this.filterEvents(this.filterList) : this.eventos)
  }

  filterEvents(filterby: string) : any {
    filterby = filterby.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filterby) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterby) !== -1
      )
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
    this.alterImg();
  }

  alterImg(): void {
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => {
        this.eventos = response
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error),
    );
  }

}
