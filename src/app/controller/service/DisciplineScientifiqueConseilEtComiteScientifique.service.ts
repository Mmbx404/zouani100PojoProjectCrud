import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../model/DisciplineScientifiqueConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../model/ConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueConseilEtComiteScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/disciplineScientifiqueConseilEtComiteScientifique/';
        })
    }
     private _disciplineScientifiqueConseilEtComiteScientifiques: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> = [];
     private _selectedDisciplineScientifiqueConseilEtComiteScientifique: DisciplineScientifiqueConseilEtComiteScientifiqueVo = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
     private _disciplineScientifiqueConseilEtComiteScientifiqueSelections: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>;
     private _createDisciplineScientifiqueConseilEtComiteScientifiqueDialog: boolean;
     private _editDisciplineScientifiqueConseilEtComiteScientifiqueDialog: boolean;
     private _viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog: boolean;
     public editDisciplineScientifiqueConseilEtComiteScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueConseilEtComiteScientifique:DisciplineScientifiqueConseilEtComiteScientifiqueVo = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();


    // getters and setters


    get disciplineScientifiqueConseilEtComiteScientifiques(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
        return this._disciplineScientifiqueConseilEtComiteScientifiques == null ? this._disciplineScientifiqueConseilEtComiteScientifiques =   new Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>() : this._disciplineScientifiqueConseilEtComiteScientifiques;
       }
    set disciplineScientifiqueConseilEtComiteScientifiques(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this._disciplineScientifiqueConseilEtComiteScientifiques = value;
       }
    get selectedDisciplineScientifiqueConseilEtComiteScientifique(): DisciplineScientifiqueConseilEtComiteScientifiqueVo {
           return this._selectedDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set selectedDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this._selectedDisciplineScientifiqueConseilEtComiteScientifique = value;
       }
    get disciplineScientifiqueConseilEtComiteScientifiqueSelections(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
        return this._disciplineScientifiqueConseilEtComiteScientifiqueSelections;
       }
    set disciplineScientifiqueConseilEtComiteScientifiqueSelections(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this._disciplineScientifiqueConseilEtComiteScientifiqueSelections = value;
       }
    get createDisciplineScientifiqueConseilEtComiteScientifiqueDialog(): boolean {
        return this._createDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set createDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this._createDisciplineScientifiqueConseilEtComiteScientifiqueDialog = value;
       }

    get editDisciplineScientifiqueConseilEtComiteScientifiqueDialog(): boolean {
        return this._editDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set editDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this._editDisciplineScientifiqueConseilEtComiteScientifiqueDialog = value;
       }

    get viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog(): boolean {
        return this._viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this._viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog = value;
       }
     get searchDisciplineScientifiqueConseilEtComiteScientifique(): DisciplineScientifiqueConseilEtComiteScientifiqueVo {
        return this._searchDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set searchDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this._searchDisciplineScientifiqueConseilEtComiteScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
         return this.http.post<DisciplineScientifiqueConseilEtComiteScientifiqueVo>(this.API, this.selectedDisciplineScientifiqueConseilEtComiteScientifique);
    }
    
    delete(disciplineScientifiqueConseilEtComiteScientifique: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+disciplineScientifiqueConseilEtComiteScientifique.id);
    }


    public edit(): Observable<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
        return this.http.put<DisciplineScientifiqueConseilEtComiteScientifiqueVo>(this.API, this.selectedDisciplineScientifiqueConseilEtComiteScientifique);
    }
    

     public findByCriteria(disciplineScientifiqueConseilEtComiteScientifique:DisciplineScientifiqueConseilEtComiteScientifiqueVo):Observable<Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>>{
           return this.http.post<Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>>(this.API+"search",disciplineScientifiqueConseilEtComiteScientifique);
    }



}