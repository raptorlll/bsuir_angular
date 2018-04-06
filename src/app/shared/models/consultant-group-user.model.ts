import { ConsultantGroup } from '../api/generated/model/consultantGroup';
import { User } from '../api/generated';

export class ConsultantGroupUser {
  consultantGroup?: ConsultantGroup;
  conversationTarif?: number;
  id?: number;
  status?: string;
  user?: User;
  videoTarif?: number;
}
