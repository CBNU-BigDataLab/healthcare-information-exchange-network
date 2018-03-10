import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.healthcare.information.exchange.network{
   export class Treatment extends Asset {
      idx: string;
      name: string;
      createDate: Date;
   }
   export class Patient extends Participant {
      idx: string;
      name: string;
      gender: string;
      email: string;
      dateOfBirth: string;
      address: string;
      telephone: string;
      lastVisit: Date;
   }
   export class Doctor extends Participant {
      name: string;
      gender: string;
      email: string;
      dateOfBirth: string;
      address: string;
      telephone: string;
      patients: Patient[];
   }
// }
