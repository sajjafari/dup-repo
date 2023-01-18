import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import createCustomErrorFromResponseError from "../utils/createCustomErrorFromResponseError";
import { t } from "i18next";
import { ECustomErrorType, TId } from "../types";
import { BASE_URL } from "../config/constants";

declare module "axios" {
  interface AxiosRequestConfig {
    isRefreshTokenReq?: boolean;
  }
}

export const createService = (
  signOut: () => void,
  accessToken: string,
  setAccessToken: any
) => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
<<<<<<< HEAD
  axios.defaults.timeoutErrorMessage = t("checkNetworkConnection") as string;
=======
  axios.defaults.timeoutErrorMessage = t("checkNetworkConnection");
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)

  const rejectResponseInterceptor = async (err: any = {}) => {
    if (err._isCustomError) {
      throw err;
      return;
    }
    const { response = {}, config = {} } = err;
    const { status } = response;
    const { isRefreshTokenReq } = config;
    const prevRequest = config;
    const Error = createCustomErrorFromResponseError(err);

    if (status) {
      if (status === 401 && !prevRequest.sent) {
        if (isRefreshTokenReq) {
          signOut();
          Error.action = "signOut";
          Error.type = ECustomErrorType.INVALID_TOKEN;
          throw Error;
        }
        prevRequest.sent = true;
        const lRefreshToken = localStorage.getItem("refreshToken");
        const refreshToken = lRefreshToken && JSON.parse(lRefreshToken);

        if (refreshToken) {
          const newAccessToken = await fetchNewAccessToken(refreshToken);
          if (newAccessToken) {
            setAccessToken(newAccessToken);
<<<<<<< HEAD
=======
            //@ts-expect-error
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
            axios.defaults.headers["Authorization"] = `JWT ${newAccessToken}`;
            prevRequest.headers["Authorization"] = `JWT ${newAccessToken}`;
            const result = await axios.request(prevRequest);

            return result;
          } else {
            throw Error;
          }
        } else {
          signOut();
          Error.action = "signOut";
          Error.type = ECustomErrorType.INVALID_TOKEN;
        }
      }
    }
    throw Error;
  };

  const fulfillResponseInterceptor = (res: AxiosResponse<any, any>) => {
    const { config = {} } = res;

    if (config.url === "auth/jwt/create/" && res.data?.access) {
<<<<<<< HEAD
=======
      //@ts-expect-error
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
      axios.defaults.headers["Authorization"] = `JWT ${res.data?.access}`;
    }

    return res;
  };

  axios.interceptors.request.use((req: AxiosRequestConfig = {}) => {
    if (!req.headers?.["Authorization"] && accessToken) {
      (req as any).headers["Authorization"] = `JWT ${accessToken}`;
    }
    return req;
  });

  axios.interceptors.response.use(
    (res) => fulfillResponseInterceptor(res),
    (err) => rejectResponseInterceptor(err)
  );

  const service = {
    activateUser(
      { uid, token }: { uid: string; token: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/activate/${uid}/${token}/`, config);
    },
    signIn(
      data: { username: string; password: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(`/auth/jwt/create/`, data, config);
    },
    signUp(
      data: { username: string; password: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(`/auth/users/`, data, config);
    },
    getSignedInUser(arg: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.get(`/auth/users/me/`, config);
    },
    fetchSpaces(arg: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.get(`/authinfo/spaces/`, config);
    },
    fetchSpace(
      { spaceId }: { spaceId: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/authinfo/spaces/${spaceId}/`, config);
    },
    deleteSpace(
      { spaceId }: { spaceId: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.delete(`/authinfo/spaces/${spaceId}/`, config);
    },
    createSpace(data: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.post(`/authinfo/spaces/`, data, config);
    },
    updateSpace(
      { spaceId, data }: { spaceId: string; data: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.put(`/authinfo/spaces/${spaceId}/`, data, config);
    },
    addMember(
      { spaceId, user_id }: { spaceId: string; user_id: string | undefined },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(
        `/authinfo/spaces/${spaceId}/useraccess/`,
        {
          user_id,
        },
        config
      );
    },
    setCurrentSpace(
      { spaceId }: { spaceId: string | number },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(`/changecurrentspace/${spaceId}/`, config);
    },
    deleteSpaceMember(
      { spaceId, memberId }: { spaceId: string; memberId: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.delete(
        `/authinfo/spaces/${spaceId}/useraccess/${memberId}/`,
        config
      );
    },
    fetchSpaceMembers(
      { spaceId }: { spaceId: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/authinfo/spaces/${spaceId}/useraccess/`, config);
    },
    fetchAssessments(
      { spaceId }: { spaceId: string | undefined },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/authinfo/spaces/${spaceId}/assessments/`, config);
    },
    createAssessment(
      { data }: { data: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(`/assessment/projects/`, data, config);
    },
    loadAssessment(
      { rowId }: { rowId: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/projects/${rowId}/`, config);
    },
    updateAssessment(
      { rowId, data }: { rowId: any; data: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.put(`/assessment/projects/${rowId}/`, data, config);
    },
    deleteAssessment(
      { id }: { id: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.delete(`/assessment/projects/${id}/`, config);
    },
    fetchAssessment(
      { assessmentId }: { assessmentId: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/reports/${assessmentId}/`, config);
    },
    fetchSubject(
      { subjectId, resultId }: { subjectId: string; resultId: string },
      config: AxiosRequestConfig<any> | undefined = {}
    ) {
      return axios.get(`/assessment/reportsubject/`, {
        ...config,
        params: {
          assessment_subject_pk: subjectId,
          assessment_result_pk: resultId,
          ...(config.params || {}),
        },
      });
    },
    fetchQuestionnaires(
      args: { subject_pk?: TId | null; assessmentId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { subject_pk, assessmentId } = args || {};
      const params = subject_pk ? { subject_pk: subject_pk } : {};
      return axios.get(`/assessment/questionaries/${assessmentId}/`, {
        ...config,
        params,
      });
    },
    fetchQuestionnaire(
      { questionnaireId }: { questionnaireId: string | undefined },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(
        `/baseinfo/metriccategories/${questionnaireId}/`,
        config
      );
    },
    fetchOptions(
      { url }: { url: string },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(url?.startsWith("/") ? url : `baseinfo/${url}/`, config);
    },
    createResult(
      { subjectId = null }: { subjectId: string | undefined | null },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.post(
        "/assessment/results/",
        {
          assessment_project: subjectId,
        },
        config
      );
    },
    fetchResults(arg: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.get(`/assessment/results/`, config);
    },
    submitAnswer(
      {
        resultId,
        questionnaireId,
        data,
      }: { resultId: TId | undefined; questionnaireId: string; data: any },
      config: AxiosRequestConfig<any> | undefined = {}
    ) {
      return axios.post(
        `/assessment/results/${resultId || ""}/metricvalues/`,
        data,
        {
          ...config,
          params: {
            metric_category_pk: questionnaireId,
            ...(config.params || {}),
          },
        }
      );
    },
    fetchMetrics(
      { questionnaireId }: { questionnaireId: string | undefined },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(
        `/baseinfo/metriccategories/${questionnaireId}/metrics/`,
        config
      );
    },
    fetchMetricsResult(
      {
        questionnaireId,
        assessmentId,
      }: { questionnaireId: TId; assessmentId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(
        `/assessment/result/${assessmentId}/${questionnaireId}/`,
        config
      );
    },
    fetchTotalProgress(
      { assessmentId }: { assessmentId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/progress/${assessmentId}/`, config);
    },
    fetchQuestionnairesPageData(
      { assessmentId }: { assessmentId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/subjects/${assessmentId}/`, config);
    },

    fetchQuestionnaireResult(
      {
        resultId,
        questionnaireId,
      }: { resultId: string; questionnaireId: string },
      config: AxiosRequestConfig<any> | undefined = {}
    ) {
      return axios.get(`/assessment/results/${resultId}/metricvalues/`, {
        ...config,
        params: {
          metric_category_pk: questionnaireId,
          ...(config.params || {}),
        },
      });
    },
    fetchCompare(
      args: any | undefined,
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/loadcompare/`, {
        ...config,
        withCredentials: true,
      });
    },
<<<<<<< HEAD
<<<<<<< HEAD
    fetchCompareResult(
      args: { assessmentIds: string[] },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { assessmentIds } = args || {};
      return axios.post(
        `/assessment/compare/`,
        { assessment_list_ids: assessmentIds || [] },
        {
          ...config,
          withCredentials: true,
        }
      );
=======
    compare(
      args: { assessment_list: string[] },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/loadcompare/`, {
        ...config,
        withCredentials: true,
      });
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    fetchCompareResult(
      args: { assessmentIds: string[] },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { assessmentIds } = args || {};
      return axios.post(
        `/assessment/compare/`,
        { assessment_list_ids: assessmentIds || [] },
        {
          ...config,
          withCredentials: true,
        }
      );
>>>>>>> c865200 (OTAT-212 Add compare result page)
    },
    saveCompareItem(
      { assessmentId }: { assessmentId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/savecompare/${assessmentId}/`, {
        ...config,
        withCredentials: true,
      });
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
    fetchProfiles(args: any, config: AxiosRequestConfig<any> | undefined = {}) {
      const { query } = args || {};
      const params = query ? { query } : {};
      return axios.get(`/baseinfo/profiles/`, { params, ...config });
    },
<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
    fetchCompareItemAssessments(
      args: any | undefined,
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.get(`/assessment/currentuserprojects/`, config);
    },
    fetchBreadcrumbInfo(
      args: { assessmentId?: TId; spaceId?: TId; questionnaireId?: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const {
        assessmentId: assessment_id,
        spaceId: space_id,
        questionnaireId: category_id,
      } = args || {};
      return axios.post(
        `/assessment/breadcrumbinfo/`,
        { assessment_id, space_id, category_id },
        config
      );
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
    fetchAssessmentsInfo(
      args: { assessmentIds: TId[] },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { assessmentIds } = args || {};
      return axios.post(
        `/assessment/compareselect/`,
        { assessment_list_ids: assessmentIds || [] },
<<<<<<< HEAD
<<<<<<< HEAD
        config
      );
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    fetchProfile(
      args: { profileId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { profileId } = args || {};
      return axios.get(`/baseinfo/profiles/${profileId}/`, config);
=======
=======
    uploadProfile(file: any, config: AxiosRequestConfig<any> | undefined) {
=======
    uploadProfileDSL(file: any, config: AxiosRequestConfig<any> | undefined) {
>>>>>>> 2dc54c4 (OTAT-253 Add delete profile)
      return axios.post(
        `/baseinfo/dsl/`,
        { dsl_file: file },
        {
          ...config,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
<<<<<<< HEAD
>>>>>>> 9de2fe5 (OTAT-154 Add responsive layout to profile and connected services)
=======
    deleteProfileDSL(
      args: { id: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { id } = args || {};
      return axios.delete(`/baseinfo/dsl/${id}`, config);
    },
    createProfile(
      args: { data: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { data } = args || {};
      return axios.post(`/baseinfo/importprofile/`, data, config);
    },
    updateProfile(
      args: { id: TId; data: any },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { id, data } = args || {};
      return axios.put(`/baseinfo/importprofile/${id}`, data, config);
    },
    fetchProfile(
      args: { id: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { id } = args || {};
      return axios.get(`/baseinfo/importprofile/${id}`, config);
    },
    deleteProfile(
      args: { id: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { id } = args || {};
      return axios.delete(`/baseinfo/importprofile/${id}`, config);
    },
>>>>>>> 2dc54c4 (OTAT-253 Add delete profile)
    uploadProfilePhoto(file: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.post(
        `/baseinfo/profiles/1/images/`,
        { image: file },
        {
          ...config,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    deleteProfilePhoto(
      args: { id: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.delete(`/baseinfo/profiles/1/images/${args?.id}/`, config);
<<<<<<< HEAD
>>>>>>> a0e0d8d (OTAT-252 Add uploader field)
=======
    },
    inspectProfile(
      args: { profileId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { profileId } = args || {};
      return axios.get(`/baseinfo/inspectprofile/${profileId}/`, config);
>>>>>>> c7ab3a1 (OTAT-253 Add create profile dialog)
    },
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        {
          ...config,
          withCredentials: true,
        }
      );
    },
<<<<<<< HEAD
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
        config
      );
    },
    fetchProfile(
      args: { profileId: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      const { profileId } = args || {};
      return axios.get(`/baseinfo/profiles/${profileId}/`, config);
    },
>>>>>>> 6640d72 (OTAT-154 Add profile page)
=======
    uploadProfilePhoto(file: any, config: AxiosRequestConfig<any> | undefined) {
      return axios.post(
        `/baseinfo/profiles/1/images/`,
        { image: file },
        {
          ...config,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    deleteProfilePhoto(
      args: { id: TId },
      config: AxiosRequestConfig<any> | undefined
    ) {
      return axios.delete(`/baseinfo/profiles/1/images/${args?.id}/`, config);
    },
>>>>>>> 834bd68 (OTAT-252 Add uploader field)
  };

  return service;
};

const fetchNewAccessToken = async (refresh: string) => {
  const { data = {} } = await axios.post(
    "/auth/jwt/refresh",
    { refresh },
    { isRefreshTokenReq: true }
  );

  const { access } = data as any;

  return access;
};

export type TService = ReturnType<typeof createService>;
