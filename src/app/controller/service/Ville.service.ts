import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {VilleVo} from '../model/Ville.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class VilleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/ville/';
        })
    }
     private _villes: Array<VilleVo> = [];
     private _selectedVille: VilleVo = new VilleVo();
     private _villeSelections: Array<VilleVo>;
     private _createVilleDialog: boolean;
     private _editVilleDialog: boolean;
     private _viewVilleDialog: boolean;
     public editVille$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchVille:VilleVo = new VilleVo();


    // getters and setters


    get villes(): Array<VilleVo> {
        return this._villes == null ? this._villes =   new Array<VilleVo>() : this._villes;
       }
    set villes(value: Array<VilleVo>) {
        this._villes = value;
       }
    get selectedVille(): VilleVo {
           return this._selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this._selectedVille = value;
       }
    get villeSelections(): Array<VilleVo> {
        return this._villeSelections;
       }
    set villeSelections(value: Array<VilleVo>) {
        this._villeSelections = value;
       }
    get createVilleDialog(): boolean {
        return this._createVilleDialog;
       }
    set createVilleDialog(value: boolean) {
        this._createVilleDialog = value;
       }

    get editVilleDialog(): boolean {
        return this._editVilleDialog;
       }
    set editVilleDialog(value: boolean) {
        this._editVilleDialog = value;
       }

    get viewVilleDialog(): boolean {
        return this._viewVilleDialog;
       }
    set viewVilleDialog(value: boolean) {
        this._viewVilleDialog = value;
       }
     get searchVille(): VilleVo {
        return this._searchVille;
       }
    set searchVille(value: VilleVo) {
        this._searchVille = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<VilleVo>>(this.API);
    }
    
    public save(): Observable<VilleVo> {
         return this.http.post<VilleVo>(this.API, this.selectedVille);
    }
    
    delete(ville: VilleVo) {
         return this.http.delete<number>(this.API+"id/"+ville.id);
    }


    public edit(): Observable<VilleVo> {
        return this.http.put<VilleVo>(this.API, this.selectedVille);
    }
    

     public findByCriteria(ville:VilleVo):Observable<Array<VilleVo>>{
           return this.http.post<Array<VilleVo>>(this.API+"search",ville);
    }



}