import React from "react";
import { Route, Routes as RrdRoutes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6640d72 (OTAT-154 Add profile page)
import Redirect from "./Redirect";
import GettingThingsReadyLoading from "../components/shared/loadings/GettingThingsReadyLoading";
import ErrorNotFoundPage from "../components/shared/errors/ErrorNotFoundPage";
=======
import Layout from "../layouts/Layout";
import Redirect from "./Redirect";
import GettingThingsReadyLoading from "../components/shared/loadings/GettingThingsReadyLoading";
<<<<<<< HEAD
import PageNotFoundError from "../components/shared/errors/PageNotFoundError";
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
import ErrorNotFoundPage from "../components/shared/errors/ErrorNotFoundPage";
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
import AuthRoutes from "./AuthRoutes";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

const SignInScreen = React.lazy(() => import("../screens/SignInScreen"));
const SignUpScreen = React.lazy(() => import("../screens/SignUpScreen"));
<<<<<<< HEAD
<<<<<<< HEAD
const AccountScreen = React.lazy(() => import("../screens/AccountScreen"));
=======
const ProfileScreen = React.lazy(() => import("../screens/ProfileScreen"));
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
const AccountScreen = React.lazy(() => import("../screens/AccountScreen"));
>>>>>>> 6640d72 (OTAT-154 Add profile page)
const ActivationSuccessfulScreen = React.lazy(
  () => import("../screens/ActivationSuccessfulScreen")
);

const ExpertGroupScreen = React.lazy(
  () => import("../screens/ExpertGroupScreen")
);

const AssessmentReportScreen = React.lazy(
  () => import("../screens/AssessmentReportScreen")
);
const SubjectReportScreen = React.lazy(
  () => import("../screens/SubjectReportScreen")
);
const SpacesScreen = React.lazy(() => import("../screens/SpacesScreen"));
const SpaceSettingScreen = React.lazy(
  () => import("../screens/SpaceSettingScreen")
);
const AssessmentsScreen = React.lazy(
  () => import("../screens/AssessmentsScreen")
);
const MetricsScreen = React.lazy(() => import("../screens/MetricsScreen"));
const MetricsReviewScreen = React.lazy(
  () => import("../screens/MetricsReviewScreen")
);
const MetricScreen = React.lazy(() => import("../screens/MetricScreen"));
const QuestionnairesScreen = React.lazy(
  () => import("../screens/QuestionnairesScreen")
);
const CompareScreen = React.lazy(() => import("../screens/CompareScreen"));
const CompareResultScreen = React.lazy(
  () => import("../screens/CompareResultScreen")
);

<<<<<<< HEAD
<<<<<<< HEAD
const ProfilesScreen = React.lazy(() => import("../screens/ProfilesScreen"));
const ProfileScreen = React.lazy(() => import("../screens/ProfileScreen"));

=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
const ProfilesScreen = React.lazy(() => import("../screens/ProfilesScreen"));
const ProfileScreen = React.lazy(() => import("../screens/ProfileScreen"));

>>>>>>> 6640d72 (OTAT-154 Add profile page)
const Routes = () => {
  return (
    <React.Suspense fallback={<GettingThingsReadyLoading />}>
      <RrdRoutes>
        <Route path="/" element={<Redirect />} />
        <Route
          element={
            <AuthLayout>
              <AuthRoutes />
            </AuthLayout>
          }
        >
          <Route path="/sign-in" element={<SignInScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route
            path="/account/active/:uid/:token"
            element={<ActivationSuccessfulScreen />}
          />
        </Route>

        <Route
          element={
            <AppLayout>
              <PrivateRoutes />
            </AppLayout>
          }
        >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/account" element={<AccountScreen />} />
=======
          <Route
            path="/account/:username/:accountTab"
            element={<AccountScreen />}
          />
          <Route
            path="/account/:username/expert-groups/:expertGroupId"
            element={<ExpertGroupScreen />}
          />
<<<<<<< HEAD
>>>>>>> bff18dc (OTAT-293 Add view profile page foundation)
=======
          <Route
            path="/account/:username/expert-groups/:expertGroupId/profiles/:profileId"
            element={<ProfileScreen />}
          />
>>>>>>> aa86b5d (OTAT-301 Moved create profile to expert group)
          <Route path="/spaces" element={<SpacesScreen />} />
          <Route path="/profiles" element={<ProfilesScreen />} />
          <Route path="/profiles/:profileId" element={<ProfileScreen />} />
=======
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/spaces" element={<SpacesScreen />} />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
          <Route path="/account" element={<AccountScreen />} />
          <Route path="/spaces" element={<SpacesScreen />} />
          <Route path="/profiles" element={<ProfilesScreen />} />
          <Route path="/profiles/:profileId" element={<ProfileScreen />} />
>>>>>>> 6640d72 (OTAT-154 Add profile page)
          <Route path="/:spaceId/setting" element={<SpaceSettingScreen />} />
          <Route path="/:spaceId/assessments" element={<AssessmentsScreen />} />
          <Route
            path="/:spaceId/assessments/:assessmentId/insights"
            element={<AssessmentReportScreen />}
          />
          <Route
            path="/:spaceId/assessments/:assessmentId/insights/:subjectId"
            element={<SubjectReportScreen />}
          />
          <Route
            path="/:spaceId/assessments/:assessmentId/questionnaires"
            element={<QuestionnairesScreen />}
          />
          <Route
            path="/:spaceId/assessments/:assessmentId/questionnaires/:questionnaireId/review"
            element={<MetricsReviewScreen />}
          />
          <Route
            path="/:spaceId/assessments/:assessmentId/questionnaires/:questionnaireId"
            element={<MetricsScreen />}
          >
            <Route path="" element={<MetricScreen />} />
            <Route path=":metricIndex" element={<MetricScreen />} />
          </Route>
          <Route path="/compare" element={<CompareScreen />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/compare/result" element={<CompareResultScreen />} />
        </Route>
        <Route path="*" element={<ErrorNotFoundPage />} />
=======
          <Route
            path="/compare/compare-result"
            element={<CompareResultScreen />}
          />
=======
          <Route path="/compare/result" element={<CompareResultScreen />} />
>>>>>>> c865200 (OTAT-212 Add compare result page)
        </Route>
<<<<<<< HEAD
        <Route path="*" element={<PageNotFoundError />} />
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        <Route path="*" element={<ErrorNotFoundPage />} />
>>>>>>> 671bfb7 (OTAT-212 Add compare page)
      </RrdRoutes>
    </React.Suspense>
  );
};

export default Routes;
