import { DialogProps } from "@mui/material/Dialog";
import { AxiosPromise, AxiosRequestConfig } from "axios";
import { ToastOptions } from "react-toastify";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { string } from "yup";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 11a534e (OTAT-266 add Vite)
import { ICustomError } from "./utils/CustomError";

export enum ECustomErrorType {
  "DEFAULT" = "DEFAULT",
  "UNAUTHORIZED" = "UNAUTHORIZED",
  "NETWORK_CONNECTION" = "NETWORK_CONNECTION",
  "INVALID_TOKEN" = "INVALID_TOKEN",
  "NOT_FOUND" = "NOT_FOUND",
  "CANCELED" = "CANCELED",
  "ACCESS_DENIED" = "ACCESS_DENIED",
}

export enum ESystemStatus {
  "OPTIMIZED" = "OPTIMIZED",
  "GOOD" = "GOOD",
  "NORMAL" = "NORMAL",
  "RISKY" = "RISKY",
  "WEAK" = "WEAK",
}

export type TId = string | number;

export interface IDefaultModel<T extends any = any> {
  count: number;
  next: null;
  previous: null;
  results: T[];
}

export interface IAnswerTemplate {
  caption: string;
  value: number;
  id: TId;
}

export type TAnswerTemplates = IAnswerTemplate[];
export interface IMetricInfo {
  id: TId;
  index: number;
  answer: null | TAnswer;
  title: string;
  metricResultId?: string | number;
  answer_templates: TAnswerTemplates;
}
export type TMetricsInfo = {
  total_number_of_metrics: number;
  resultId: TId | undefined;
  metrics?: IMetricInfo[];
};

export type TAnswer = {
  id: TId;
  value: string | number;
  caption: string;
};

export type TStatus =
  | "WEAK"
  | "RISKY"
  | "NORMAL"
  | "GOOD"
  | "OPTIMIZED"
  | "Not Calculated"
  | null;

export interface IUserInfo {
  id: TId;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  current_space: ISpaceInfo | null;
}

export interface ISpaceInfo {
  id: TId;
  code: string;
  title: string;
  owner: {
    first_name: string;
    id: TId;
    last_name: string;
    username: string;
  };
}

export type TToastConfig = ToastOptions & {
  message: string | JSX.Element;
};

export interface ISubjectInfo {
  description: string;
  id: TId;
  image: string | null;
  progress: number;
  status: TStatus;
  title: string;
  total_answered_metric_number: number;
  total_metric_number: number;
}

export interface IImage {
  id: TId;
  image: string;
}

export type TImages = IImage[];

export interface IAssessmentProfileModel {
  code: string;
  description: string;
  id: TId;
  title: string;
  images: TImages;
  metric_categories: IQuestionnaireModel[];
  assessment_subjects: Omit<
    ISubjectInfo,
    | "total_answered_metric_number"
    | "total_metric_number"
    | "progress"
    | "status"
  >;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
export interface IProfile {
  code: string;
  description: string;
  id: TId;
  title: string;
}

<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
export interface IAssessmentResult {
  assessment_project: string;
  id: TId;
}
export interface IAssessmentResultModel
  extends IDefaultModel<IAssessmentResult> {}

export type TAssessmentResultsModel = string[];

export interface IColorModel {
  color_code: string;
  id: TId;
  title: string;
}

export interface IOwnerModel {
  id: TId;
  username: string;
  first_name: string;
  last_name: string;
}

export interface ISpaceModel {
  code: string;
  id: TId;
  owner: IOwnerModel;
  title: string;
  last_modification_date?: string;
  members_number?: number;
}

export interface ISpacesModel extends IDefaultModel<ISpaceModel> {}
export interface IAssessmentReport {
  assessment_profile: Omit<
    IAssessmentProfileModel,
    "metric_categories" | "images" | "assessment_subjects"
  >;
  assessment_results: string[];
  color: IColorModel;
  last_modification_date: string;
  space: ISpaceModel;
  title: string;
}

export interface ITotalProgress {
  progress: number;
  total_answered_metric_number: number;
  total_metric_number: number;
}

export interface ITotalProgressModel {
  total_progress: ITotalProgress;
  assessment_project_title: string;
}
export interface IAssessmentReportModel {
  subjects_info: ISubjectInfo[];
  status: TStatus;
  most_significant_strength_atts: string[];
  most_significant_weaknessness_atts: string[];
  assessment_project: IAssessmentReport;
  total_progress: ITotalProgress;
}

export interface IQuestionnaireModel {
  code: string;
  id: TId;
  title: string;
}

export interface IMetric {
  id: TId;
  index: number;
  title: string;
  answer_templates: TAnswerTemplates;
  answer: TAnswer;
}

export interface IMetricsModel {
  metrics: IMetric[];
  assessment_result_id: string;
}

export interface IMetricImpact {
  id: TId;
  level: number;
  quality_attribute: number;
}

export type TMetricImpacts = IMetricImpact[];

export interface IQualityAttribute {
  code: string;
  description: string;
  id: TId;
  images: TImages;
  title: string;
}

export interface IMetricResult {
  id: TId;
  index: number;
  title: string;
  metric_impacts: TMetricImpacts;
  quality_attributes: IQualityAttribute[];
}

export interface IMetricsResult extends IAssessmentResult {
  answer: TAnswer;
  metric: IMetricResult;
}

export interface IMetricsResultsModel extends IDefaultModel<IMetricsResult> {}

export interface IAssessment {
  id: TId;
  last_modification_date: string;
  status: TStatus;
  title: string;
  code: string;
  color: IColorModel;
  assessment_results: string[];
  assessment_profile: IAssessmentProfileModel;
  total_progress?: ITotalProgress;
}

export interface IAssessmentModel extends IDefaultModel<IAssessment> {
  requested_space: string | null;
}

export interface IMember {
  id: TId;
  space: TId;
  user: Omit<IUserInfo, "current_space" | "email">;
}

export interface IMemberModel extends IDefaultModel<IMember> {}

export interface ISubjectReport {
  id: TId;
  maturity_level_value: number;
  status: TStatus;
  quality_attribute: IQualityAttribute;
}

export interface IQuestionnaire {
  answered_metric: number;
  id: TId;
  metric_number: number;
  progress: number;
  title: string;
  last_updated?: string;
}

export interface IQuestionnairesInfo {
  answered_metric: number;
  id: TId;
  metric_number: number;
  progress: number;
  last_updated?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:frontend/src/types.ts
<<<<<<< HEAD
  current_metric_index: number;
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  current_metric_index: number;
>>>>>>> 54e9997 (OTAT-160 Fix continue button functionality):front/src/types.ts
=======
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
=======
  current_metric_index: number;
>>>>>>> b9b7db6 (OTAT-212 Fix continue button)
  title: string;
  subject: { id: TId; title: string }[];
}
export interface IQuestionnairesModel extends ITotalProgress {
  assessment_title: string;
  questionaries_info: IQuestionnairesInfo[];
}

export interface ISubjectReportModel extends IDefaultModel<ISubjectReport> {
  assessment_profile_description: string;
  assessment_project_color_code: string;
  assessment_project_id: string;
  assessment_project_space_id: TId;
  assessment_project_space_title: string;
  assessment_project_title: string;
  maturity_level_value: number;
  progress: number;
  status: TStatus;
  title: string;
  total_answered_metric: number;
  total_metric_number: number;
  metric_categories_info: IQuestionnaire[];
  most_significant_strength_atts: IQualityAttribute[];
  most_significant_weaknessness_atts: IQualityAttribute[];
  no_insight_yet_message?: string;
  total_progress: ITotalProgress;
}

export type TQueryFunction<T extends any = any, A extends any = any> = (
  args?: A,
  config?: AxiosRequestConfig<any> | undefined
) => Promise<T>;

<<<<<<< HEAD
<<<<<<< HEAD
export type TQueryProps<T extends any = any, A extends any = any> = {
=======
export type TQueryData<T extends any = any, A extends any = any> = {
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
export type TQueryProps<T extends any = any, A extends any = any> = {
>>>>>>> c865200 (OTAT-212 Add compare result page)
  data: T;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorObject: ICustomError | undefined;
  query: (
    args?: A | undefined,
    config?: AxiosRequestConfig<any> | undefined
  ) => Promise<T>;
  abortController?: AbortController;
};

export interface IQuestionnairesPageDataModel {
  assessment_title: string;
  subjects: { id: TId; title: string }[];
}

export interface IDialogProps extends DialogProps {
  onClose: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  onSubmitForm?: (args: any) => void;
=======
  onSubmitForm?: () => void;
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
  onSubmitForm?: (args: any) => void;
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
  openDialog?: any;
  context?: IDialogContext;
}

export interface IDialogContext {
  type: TDialogContextType | (string & {});
  data?: any;
  onSubmit?: (...args: any) => any;
  getViewLink?: (data: any) => string;
}

export type TDialogContextType = "update" | "create";

export interface ICompareModel {
  assessment_project_compare_list: any[];
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)

export interface ICompareResultBaseInfo {
  id: TId;
  title: string;
  status: TStatus;
  profile: string;
}
export type TCompareResultBaseInfos = ICompareResultBaseInfo[];

export interface ICompareResultCompareItems {
  title: string;
  items: any[];
}

export type TCompareResultAttributeInfo = {
  title: string;
} & {
  [key: string]: number;
};

export interface ICompareResultSubject {
  title: string;
  subject_report_info: ICompareResultCompareItems[];
  attributes_info: TCompareResultAttributeInfo[];
}

export interface ICompareResultModel {
  base_infos: TCompareResultBaseInfos;
  overall_insights: ICompareResultCompareItems[];
  subjects: ICompareResultSubject[];
}
<<<<<<< HEAD
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> c865200 (OTAT-212 Add compare result page)
