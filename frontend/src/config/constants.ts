export const BASE_URL =
  process.env.NODE_ENV === "development"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ? "https://checkuptest.asta.ir"
=======
    ? "https://checkup.asta.ir"
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    ? "https://checkuptest.asta.ir"
>>>>>>> 8934a58 (fix some issues in new installation)
=======
    ? import.meta.env.VITE_LOCAL_BASE_URL || "https://checkuptest.asta.ir"
>>>>>>> 1bdba36 (OTAT-284 Add tags field to profile create from)
    : process.env.BASE_URL;

export const APP_LABEL = "Checkup-Platform";
