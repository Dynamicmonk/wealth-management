import { localStorage } from "../../base/localStorage";
import { prodEnvironment } from "../../../environment/prodEnvironment";

export const checkUserLoggedInUseCase = (): string | null => {
  const { getData, removeData } = localStorage();
  const { getKeyToStoreLoginId } = prodEnvironment();

  const requestId = getData(getKeyToStoreLoginId());

  if (
    Boolean(requestId) &&
    requestId !== "00000000-0000-0000-0000-000000000000"
  )
    return requestId;

  if (requestId === "00000000-0000-0000-0000-000000000000") {
    removeData(getKeyToStoreLoginId());
    return null;
  }

  return null;
};
