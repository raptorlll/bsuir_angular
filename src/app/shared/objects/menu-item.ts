export class MenuItem {
  name: string;
  description: string;
  route: string[];

  constructor(obj: Partial<MenuItem>) {
    Object.assign(this, obj);
  }
}
