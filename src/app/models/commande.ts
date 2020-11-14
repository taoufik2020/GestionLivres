import { CommandeDetail } from './commande-detail';
export interface Commande {

	_id:string;
	 Date_commande:Date;
	 id_client:string;
	 etat:string;
	 montant:Number;
     Details: CommandeDetail[];
}
