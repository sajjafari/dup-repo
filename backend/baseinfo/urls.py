<<<<<<< HEAD
<<<<<<< HEAD
from .views import commonviews
from .imagecomponent.views import QualityAttributeImageViewSet, SubjectImageViewSet, ProfileImageViewSet
from rest_framework_nested import routers
from .views import profileviews
from .views import expertgroupviews
from django.urls import path



router = routers.DefaultRouter()
router.register('profiles', profileviews.AssessmentProfileViewSet, basename='profiles')
router.register('metriccategories', commonviews.MetricCategoryViewSet, basename='metriccategories')
router.register('subjects', commonviews.AssessmentSubjectViewSet, basename='subjects')
router.register('attributes', commonviews.QualityAttributeViewSet, basename='attributes')
router.register('dsl', profileviews.UploadProfileApi, basename='dsl')
<<<<<<< HEAD
<<<<<<< HEAD
=======
router.register('tags', profileviews.ProfileTagViewSet, basename='tags')
<<<<<<< HEAD
>>>>>>> 2946cf0 (make profile tag many to many)
=======
router.register('expertgroups', expertgroupviews.ExpertGroupViewSet, basename='expertgroups')
>>>>>>> adc5997 (OTAT-269: expert group base info and services is ready)


metric_category_router = routers.NestedDefaultRouter(router, 'metriccategories', lookup='metric_category')
metric_category_router.register('metrics', commonviews.MetricViewSet, basename='metric-category-metrics')
=======
from . import views
=======
from .views import commonviews
>>>>>>> 3015a1a (display profile by rest service)
from .imagecomponent.views import QualityAttributeImageViewSet, SubjectImageViewSet, ProfileImageViewSet
from rest_framework_nested import routers
from .views import profileviews
from django.urls import path



router = routers.DefaultRouter()
router.register('profiles', commonviews.AssessmentProfileViewSet, basename='profiles')
router.register('metriccategories', commonviews.MetricCategoryViewSet, basename='metriccategories')
router.register('subjects', commonviews.AssessmentSubjectViewSet, basename='subjects')
router.register('attributes', commonviews.QualityAttributeViewSet, basename='attributes')
=======
>>>>>>> d2cf4b2 (change upload file for dsl)


metric_category_router = routers.NestedDefaultRouter(router, 'metriccategories', lookup='metric_category')
<<<<<<< HEAD
metric_category_router.register('metrics', views.MetricViewSet, basename='metric-category-metrics')


# attribute_router = routers.NestedDefaultRouter(router, 'subjects', lookup='assessment_subject')
# attribute_router.register('attributes', views.QualityAttributeViewSet, basename='subject-attributes')
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
metric_category_router.register('metrics', commonviews.MetricViewSet, basename='metric-category-metrics')
>>>>>>> 3015a1a (display profile by rest service)

attribute_router = routers.NestedDefaultRouter(router, 'attributes', lookup='attribute')
attribute_router.register('images', QualityAttributeImageViewSet, basename='attribute-images')

subject_router = routers.NestedDefaultRouter(router, 'subjects', lookup='subject')
subject_router.register('images', SubjectImageViewSet, basename='subject-images')

profile_router = routers.NestedDefaultRouter(router, 'profiles', lookup='profile')
profile_router.register('images', ProfileImageViewSet, basename='profile-images')

<<<<<<< HEAD
<<<<<<< HEAD
metric_category_by_subject_router = routers.NestedDefaultRouter(router, 'subjects', lookup='assessment_subject')
metric_category_by_subject_router.register('metriccategories', commonviews.MetricCategoryBySubjectViewSet, basename='subject-metriccategories')
=======


metric_category_by_subject_router = routers.NestedDefaultRouter(router, 'subjects', lookup='assessment_subject')
metric_category_by_subject_router.register('metriccategories', views.MetricCategoryBySubjectViewSet, basename='subject-metriccategories')
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
metric_category_by_subject_router = routers.NestedDefaultRouter(router, 'subjects', lookup='assessment_subject')
metric_category_by_subject_router.register('metriccategories', commonviews.MetricCategoryBySubjectViewSet, basename='subject-metriccategories')
>>>>>>> 3015a1a (display profile by rest service)


urlpatterns = router.urls + metric_category_router.urls + metric_category_by_subject_router.urls + attribute_router.urls + subject_router.urls + profile_router.urls

<<<<<<< HEAD
<<<<<<< HEAD
urlpatterns += [
    path("inspectprofile/<str:profile_id>/", profileviews.ProfileDetailDisplayApi.as_view()),
    path("importprofile/", profileviews.ImportProfileApi.as_view()),
<<<<<<< HEAD
<<<<<<< HEAD
]
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
urlpatterns += [
    path("inspectprofile/<str:profile_id>/", profileviews.ProfileDetailDisplayApi.as_view()),
]
>>>>>>> 3015a1a (display profile by rest service)
=======
]
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
=======
    path("addexpertgroup/<str:expert_group_id>/", expertgroupviews.AddUserToExpertGroupApi.as_view()),
<<<<<<< HEAD
]
>>>>>>> adc5997 (OTAT-269: expert group base info and services is ready)
=======
    path("profiles/archive/<str:profile_id>/", profileviews.ProfileArchiveApi.as_view()),
    path("profiles/publish/<str:profile_id>/", profileviews.ProfilePublishApi.as_view()),
]
>>>>>>> b5a5a11 (OTAT-289: archive and publish profile service is ready)
