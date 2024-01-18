import { ITask } from "../interface/ITask";

export const createDefaultTask = (): ITask => ({
  id: 0,
  text: "",
  day: "",
  reminder: false,
});
