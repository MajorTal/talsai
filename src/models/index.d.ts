import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ZombieFoldersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ZombieFolders {
  readonly id: string;
  readonly FolderName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ZombieFolders, ZombieFoldersMetaData>);
  static copyOf(source: ZombieFolders, mutator: (draft: MutableModel<ZombieFolders, ZombieFoldersMetaData>) => MutableModel<ZombieFolders, ZombieFoldersMetaData> | void): ZombieFolders;
}