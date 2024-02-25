import { UpdatePayload, User } from "@/types";

export function getChangedValues(
  updates: UpdatePayload & [key: string],
  user: User & [key: string]
) {
  const resultObj: any = {};
  for (const key in updates) {
    if (updates.hasOwnProperty(key) && updates[key] !== user[key]) {
      resultObj[key] = updates[key];
    }
  }
  return resultObj;
}
