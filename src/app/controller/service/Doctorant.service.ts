import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DoctorantVo} from '../model/Doctorant.model';
import {SexeVo} from '../model/Sexe.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/doctorant/';
        })
    }
     private _doctorants: Array<DoctorantVo> = [];
     private _selectedDoctorant: DoctorantVo = new DoctorantVo();
     private _doctorantSelections: Array<DoctorantVo>;
     private _createDoctorantDialog: boolean;
     private _editDoctorantDialog: boolean;
     private _viewDoctorantDialog: boolean;
     public editDoctorant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDoctorant:DoctorantVo = new DoctorantVo();


    // getters and setters


    get doctorants(): Array<DoctorantVo> {
        return this._doctorants == null ? this._doctorants =   new Array<DoctorantVo>() : this._doctorants;
       }
    set doctorants(value: Array<DoctorantVo>) {
        this._doctorants = value;
       }
    get selectedDoctorant(): DoctorantVo {
           return this._selectedDoctorant;
       }
    set selectedDoctorant(value: DoctorantVo) {
        this._selectedDoctorant = value;
       }
    get doctorantSelections(): Array<DoctorantVo> {
        return this._doctorantSelections;
       }
    set doctorantSelections(value: Array<DoctorantVo>) {
        this._doctorantSelections = value;
       }
    get createDoctorantDialog(): boolean {
        return this._createDoctorantDialog;
       }
    set createDoctorantDialog(value: boolean) {
        this._createDoctorantDialog = value;
       }

    get editDoctorantDialog(): boolean {
        return this._editDoctorantDialog;
       }
    set editDoctorantDialog(value: boolean) {
        this._editDoctorantDialog = value;
       }

    get viewDoctorantDialog(): boolean {
        return this._viewDoctorantDialog;
       }
    set viewDoctorantDialog(value: boolean) {
        this._viewDoctorantDialog = value;
       }
     get searchDoctorant(): DoctorantVo {
        return this._searchDoctorant;
       }
    set searchDoctorant(value: DoctorantVo) {
        this._searchDoctorant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DoctorantVo>>(this.API);
    }
    
    public save(): Observable<DoctorantVo> {
         return this.http.post<DoctorantVo>(this.API, this.selectedDoctorant);
    }
    
    delete(doctorant: DoctorantVo) {
         return this.http.delete<number>(this.API+"id/"+doctorant.id);
    }


    public edit(): Observable<DoctorantVo> {
        return this.http.put<DoctorantVo>(this.API, this.selectedDoctorant);
    }
    

     public findByCriteria(doctorant:DoctorantVo):Observable<Array<DoctorantVo>>{
           return this.http.post<Array<DoctorantVo>>(this.API+"search",doctorant);
    }



}