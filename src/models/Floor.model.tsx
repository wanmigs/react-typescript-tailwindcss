export class Floor {
  constructor(
    public id: number,
    public level: string,
    public spaces: number,
    public available: number,
    public amenities: string[],
    public workspaces: Array<{
      id: string;
      isAvailable: boolean;
      type: string;
      equipments: string;
    }>
  ) {}
}
