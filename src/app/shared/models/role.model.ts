export class Role {
  description?: string;
  id?: number;
  roleName?: string;

  constructor(obj: Partial<Role>) {
    Object.assign(this, obj);
  }
}
