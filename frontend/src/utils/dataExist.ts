<<<<<<< HEAD
<<<<<<< HEAD
=======
import { object } from "yup";

>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
const dataExist = (data: any) => {
  if (!data) {
    return false;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (Array.isArray(data) && data.length == 0) {
    return false;
  }
  if (typeof data === "object" && Object.keys(data).length === 0) {
    return false;
  }
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  return true;
};

export default dataExist;
