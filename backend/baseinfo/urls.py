<<<<<<< HEAD
<<<<<<< HEAD
from .views import commonviews
from .imagecomponent.views import QualityAttributeImageViewSet, SubjectImageViewSet, ProfileImageViewSet
from rest_framework_nested import routers
from .views import profileviews
from django.urls import path



router = routers.DefaultRouter()
router.register('profiles', commonviews.AssessmentProfileViewSet, basename='profiles')
router.register('metriccategories', commonviews.MetricCategoryViewSet, basename='metriccategories')
router.register('subjects', commonviews.AssessmentSubjectViewSet, basename='subjects')
router.register('attributes', commonviews.QualityAttributeViewSet, basename='attributes')
router.register('dsl', profileviews.UploadProfileApi, basename='dsl')


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
]
=======
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
urlpatterns += [
    path("inspectprofile/<str:profile_id>/", profileviews.ProfileDetailDisplayApi.as_view()),
]
>>>>>>> 3015a1a (display profile by rest service)
