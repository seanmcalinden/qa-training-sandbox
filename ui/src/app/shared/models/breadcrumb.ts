export class Breadcrumb {
  public label!: string;
  public route!: string;
  public isActive!: boolean;

  constructor(label: string, route: string, isActive = false) {
    this.label = label;
    this.route = route;
    this.isActive = isActive;
  }
}
