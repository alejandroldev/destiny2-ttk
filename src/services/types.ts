export type TDictionary<T = string> = {
  [key: string]: T;
};

export interface IResponse<T> {
  Response: T;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: TDictionary;
}

export interface IDestinyManifest {
  version: string;
  mobileAssetContentPath: string;
  mobileGearAssetDataBases: IGearAssetDataBaseDefinition[];
  mobileWorldContentPaths: TDictionary;
  jsonWorldContentPaths: TDictionary;
  jsonWorldComponentContentPaths: TDictionary<TDictionary>;
  mobileClanBannerDatabasePath: string;
  mobileGearCDN: TDictionary;
  iconImagePyramidInfo: IImagePyramidEntry[];
}

export interface IGearAssetDataBaseDefinition {
  version: number;
  path: string;
}

export interface IImagePyramidEntry {
  name: string;
  factor: number;
}
