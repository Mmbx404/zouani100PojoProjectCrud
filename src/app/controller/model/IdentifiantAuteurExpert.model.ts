import {IdentifiantRechercheVo} from './IdentifiantRecherche.model';
import {ChercheurVo} from './Chercheur.model';

export class IdentifiantAuteurExpertVo {
    public id: number;
    public valeur: string;
    public identifiantRechercheVo: IdentifiantRechercheVo = new IdentifiantRechercheVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
