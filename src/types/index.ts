export type Ping = {
  id: string;
  seq: number;
  payload: string;
};

export type Status = {
  service: boolean;
  date: Date;
  version: string;
};
