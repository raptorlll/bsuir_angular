import {ConsultantGroup} from '../api/generated/model/consultantGroup';
import {User} from '../api/generated/model/user';

export class ConsultantGroupUser {
  consultantGroup?: ConsultantGroup;
  conversationTarif?: number;
  id?: number;
  status?: string;
  user?: User;
  videoTarif?: number;
}
