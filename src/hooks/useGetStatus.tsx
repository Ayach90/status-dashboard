import { useEffect, useState } from "react";
import { StatusRequest } from "../opspb/ops_pb";
import { OpsClient } from "../opspb/OpsServiceClientPb";
import { Status } from "../types";
import { fromUnixTime } from "date-fns";

const client = new OpsClient("https://gw.a9e.services");

const useGetStatus = () => {
  const [status, setStatus] = useState<null | Status>(null);

  const getStatus = () => {
    setStatus(null);
    const req = new StatusRequest();
    client.status(req, {}, (err, resp) => {
      if (err) return null;
      setStatus({
        service: resp.hasTs(),
        date: fromUnixTime(resp.getTs().array[0]),
        version: resp.getVersion(),
      });
    });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return [status, getStatus] as const;
};

export default useGetStatus;
