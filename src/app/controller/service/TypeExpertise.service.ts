import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeExpertiseVo} from '../model/TypeExpertise.model';


@Injectable({
  providedIn: 'root'
})
export class TypeExpertiseService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeExpertise/';
        })
    }
     private _typeExpertises: Array<TypeExpertiseVo> = [];
     private _selectedTypeExpertise: TypeExpertiseVo = new TypeExpertiseVo();
     private _typeExpertiseSelections: Array<TypeExpertiseVo>;
     private _createTypeExpertiseDialog: boolean;
     private _editTypeExpertiseDialog: boolean;
     private _viewTypeExpertiseDialog: boolean;
     public editTypeExpertise$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeExpertise:TypeExpertiseVo = new TypeExpertiseVo();


    // getters and setters


    get typeExpertises(): Array<TypeExpertiseVo> {
        return this._typeExpertises == null ? this._typeExpertises =   new Array<TypeExpertiseVo>() : this._typeExpertises;
       }
    set typeExpertises(value: Array<TypeExpertiseVo>) {
        this._typeExpertises = value;
       }
    get selectedTypeExpertise(): TypeExpertiseVo {
           return this._selectedTypeExpertise;
       }
    set selectedTypeExpertise(value: TypeExpertiseVo) {
        this._selectedTypeExpertise = value;
       }
    get typeExpertiseSelections(): Array<TypeExpertiseVo> {
        return this._typeExpertiseSelections;
       }
    set typeExpertiseSelections(value: Array<TypeExpertiseVo>) {
        this._typeExpertiseSelections = value;
       }
    get createTypeExpertiseDialog(): boolean {
        return this._createTypeExpertiseDialog;
       }
    set createTypeExpertiseDialog(value: boolean) {
        this._createTypeExpertiseDialog = value;
       }

    get editTypeExpertiseDialog(): boolean {
        return this._editTypeExpertiseDialog;
       }
    set editTypeExpertiseDialog(value: boolean) {
        this._editTypeExpertiseDialog = value;
       }

    get viewTypeExpertiseDialog(): boolean {
        return this._viewTypeExpertiseDialog;
       }
    set viewTypeExpertiseDialog(value: boolean) {
        this._viewTypeExpertiseDialog = value;
       }
     get searchTypeExpertise(): TypeExpertiseVo {
        return this._searchTypeExpertise;
       }
    set searchTypeExpertise(value: TypeExpertiseVo) {
        this._searchTypeExpertise = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeExpertiseVo>>(this.API);
    }
    
    public save(): Observable<TypeExpertiseVo> {
         return this.http.post<TypeExpertiseVo>(this.API, this.selectedTypeExpertise);
    }
    
    delete(typeExpertise: TypeExpertiseVo) {
         return this.http.delete<number>(this.API+"id/"+typeExpertise.id);
    }


    public edit(): Observable<TypeExpertiseVo> {
        return this.http.put<TypeExpertiseVo>(this.API, this.selectedTypeExpertise);
    }
    

     public findByCriteria(typeExpertise:TypeExpertiseVo):Observable<Array<TypeExpertiseVo>>{
           return this.http.post<Array<TypeExpertiseVo>>(this.API+"search",typeExpertise);
    }



}