import { useEffect, useState } from "react";
import { PingRequest } from "../opspb/ops_pb";
import { OpsClient } from "../opspb/OpsServiceClientPb";
import { Ping } from "../types";

const client = new OpsClient("https://gw.a9e.services");

const useGetPings = (sequences: number) => {
  const [pings, setPings] = useState<Ping[] | null>(null);

  const getPings = (sequences: number) => {
    setPings(null);
    var req = new PingRequest();
    req.setN(sequences);
    req.setId(`id${Math.floor(Math.random() * 1000).toString()}`);
    const res = client.ping(req);
    const pings: Ping[] = [];

    res.on("data", (data) => {
      pings.push({
        id: data.getId(),
        seq: data.getSeq(),
        payload: data.getPayload(),
      });
      setPings(pings);
    });
  };

  useEffect(() => {
    getPings(sequences);
    // eslint-disable-next-line
  }, []);

  return [pings, getPings] as const;
};

export default useGetPings;
