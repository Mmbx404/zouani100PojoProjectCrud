import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {NatureEtudeVo} from '../model/NatureEtude.model';


@Injectable({
  providedIn: 'root'
})
export class NatureEtudeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/natureEtude/';
        })
    }
     private _natureEtudes: Array<NatureEtudeVo> = [];
     private _selectedNatureEtude: NatureEtudeVo = new NatureEtudeVo();
     private _natureEtudeSelections: Array<NatureEtudeVo>;
     private _createNatureEtudeDialog: boolean;
     private _editNatureEtudeDialog: boolean;
     private _viewNatureEtudeDialog: boolean;
     public editNatureEtude$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchNatureEtude:NatureEtudeVo = new NatureEtudeVo();


    // getters and setters


    get natureEtudes(): Array<NatureEtudeVo> {
        return this._natureEtudes == null ? this._natureEtudes =   new Array<NatureEtudeVo>() : this._natureEtudes;
       }
    set natureEtudes(value: Array<NatureEtudeVo>) {
        this._natureEtudes = value;
       }
    get selectedNatureEtude(): NatureEtudeVo {
           return this._selectedNatureEtude;
       }
    set selectedNatureEtude(value: NatureEtudeVo) {
        this._selectedNatureEtude = value;
       }
    get natureEtudeSelections(): Array<NatureEtudeVo> {
        return this._natureEtudeSelections;
       }
    set natureEtudeSelections(value: Array<NatureEtudeVo>) {
        this._natureEtudeSelections = value;
       }
    get createNatureEtudeDialog(): boolean {
        return this._createNatureEtudeDialog;
       }
    set createNatureEtudeDialog(value: boolean) {
        this._createNatureEtudeDialog = value;
       }

    get editNatureEtudeDialog(): boolean {
        return this._editNatureEtudeDialog;
       }
    set editNatureEtudeDialog(value: boolean) {
        this._editNatureEtudeDialog = value;
       }

    get viewNatureEtudeDialog(): boolean {
        return this._viewNatureEtudeDialog;
       }
    set viewNatureEtudeDialog(value: boolean) {
        this._viewNatureEtudeDialog = value;
       }
     get searchNatureEtude(): NatureEtudeVo {
        return this._searchNatureEtude;
       }
    set searchNatureEtude(value: NatureEtudeVo) {
        this._searchNatureEtude = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<NatureEtudeVo>>(this.API);
    }
    
    public save(): Observable<NatureEtudeVo> {
         return this.http.post<NatureEtudeVo>(this.API, this.selectedNatureEtude);
    }
    
    delete(natureEtude: NatureEtudeVo) {
         return this.http.delete<number>(this.API+"id/"+natureEtude.id);
    }


    public edit(): Observable<NatureEtudeVo> {
        return this.http.put<NatureEtudeVo>(this.API, this.selectedNatureEtude);
    }
    

     public findByCriteria(natureEtude:NatureEtudeVo):Observable<Array<NatureEtudeVo>>{
           return this.http.post<Array<NatureEtudeVo>>(this.API+"search",natureEtude);
    }



}