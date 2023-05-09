interface CargoType {
  id: number;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CargoInfo {
  id: number;
  name: string;
  weight: number;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  typeId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CargoResponse {
  code: number;
  message: string;
  data: {
    info: CargoInfo;
    type: CargoType;
  };
}
