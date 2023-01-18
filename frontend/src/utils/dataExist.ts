<<<<<<< HEAD
=======
import { object } from "yup";

>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
const dataExist = (data: any) => {
  if (!data) {
    return false;
  }
<<<<<<< HEAD
=======
  if (Array.isArray(data) && data.length == 0) {
    return false;
  }
  if (typeof data === "object" && Object.keys(data).length === 0) {
    return false;
  }
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  return true;
};

export default dataExist;
