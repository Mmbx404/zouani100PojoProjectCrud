import {EnseignementVo} from './Enseignement.model';
import {NiveauEtudeVo} from './NiveauEtude.model';

export class NiveauEtudeEnseignementVo {
    public id: number;
    public niveauEtudeVo: NiveauEtudeVo = new NiveauEtudeVo();
        
    public enseignementVo: EnseignementVo = new EnseignementVo();
        


}
