import { Workspace } from 'types/Workspace';
export class Floor {
  constructor(
    public id: number,
    public level: string,
    public spaces: number,
    public available: number,
    public amenities: string[],
    public workspaces: Workspace[]
  ) {}
}
