import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeSavoirVo} from '../model/TypeSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class TypeSavoirService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeSavoir/';
        })
    }
     private _typeSavoirs: Array<TypeSavoirVo> = [];
     private _selectedTypeSavoir: TypeSavoirVo = new TypeSavoirVo();
     private _typeSavoirSelections: Array<TypeSavoirVo>;
     private _createTypeSavoirDialog: boolean;
     private _editTypeSavoirDialog: boolean;
     private _viewTypeSavoirDialog: boolean;
     public editTypeSavoir$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeSavoir:TypeSavoirVo = new TypeSavoirVo();


    // getters and setters


    get typeSavoirs(): Array<TypeSavoirVo> {
        return this._typeSavoirs == null ? this._typeSavoirs =   new Array<TypeSavoirVo>() : this._typeSavoirs;
       }
    set typeSavoirs(value: Array<TypeSavoirVo>) {
        this._typeSavoirs = value;
       }
    get selectedTypeSavoir(): TypeSavoirVo {
           return this._selectedTypeSavoir;
       }
    set selectedTypeSavoir(value: TypeSavoirVo) {
        this._selectedTypeSavoir = value;
       }
    get typeSavoirSelections(): Array<TypeSavoirVo> {
        return this._typeSavoirSelections;
       }
    set typeSavoirSelections(value: Array<TypeSavoirVo>) {
        this._typeSavoirSelections = value;
       }
    get createTypeSavoirDialog(): boolean {
        return this._createTypeSavoirDialog;
       }
    set createTypeSavoirDialog(value: boolean) {
        this._createTypeSavoirDialog = value;
       }

    get editTypeSavoirDialog(): boolean {
        return this._editTypeSavoirDialog;
       }
    set editTypeSavoirDialog(value: boolean) {
        this._editTypeSavoirDialog = value;
       }

    get viewTypeSavoirDialog(): boolean {
        return this._viewTypeSavoirDialog;
       }
    set viewTypeSavoirDialog(value: boolean) {
        this._viewTypeSavoirDialog = value;
       }
     get searchTypeSavoir(): TypeSavoirVo {
        return this._searchTypeSavoir;
       }
    set searchTypeSavoir(value: TypeSavoirVo) {
        this._searchTypeSavoir = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeSavoirVo>>(this.API);
    }
    
    public save(): Observable<TypeSavoirVo> {
         return this.http.post<TypeSavoirVo>(this.API, this.selectedTypeSavoir);
    }
    
    delete(typeSavoir: TypeSavoirVo) {
         return this.http.delete<number>(this.API+"id/"+typeSavoir.id);
    }


    public edit(): Observable<TypeSavoirVo> {
        return this.http.put<TypeSavoirVo>(this.API, this.selectedTypeSavoir);
    }
    

     public findByCriteria(typeSavoir:TypeSavoirVo):Observable<Array<TypeSavoirVo>>{
           return this.http.post<Array<TypeSavoirVo>>(this.API+"search",typeSavoir);
    }



}