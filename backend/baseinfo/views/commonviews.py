from rest_framework.viewsets import ModelViewSet
<<<<<<< HEAD
<<<<<<< HEAD
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from ..models import AssessmentProfile, AssessmentSubject, Metric, MetricCategory, QualityAttribute
<<<<<<< HEAD
<<<<<<< HEAD
from ..serializers.commonserializers import AssessmentSubjectSerilizer, MetricCategorySerilizer, MetricSerilizer, QualityAttributeSerilizer, MetricCategoryBySubjectSerilizer
from ..serializers.profileserializers import AssessmentProfileSerilizer
=======
from ..serializers import AssessmentProfileSerilizer, AssessmentSubjectSerilizer, MetricCategorySerilizer, MetricSerilizer, QualityAttributeSerilizer, MetricCategoryBySubjectSerilizer
>>>>>>> 3015a1a (display profile by rest service)
=======
from ..serializers.commonserializers import AssessmentSubjectSerilizer, MetricCategorySerilizer, MetricSerilizer, QualityAttributeSerilizer, MetricCategoryBySubjectSerilizer
from ..serializers.profileserializers import AssessmentProfileSerilizer
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
from ..models import AssessmentSubject, Metric, MetricCategory, QualityAttribute
=======
from ..models.basemodels import AssessmentSubject, MetricCategory, QualityAttribute
from ..models.metricmodels import Metric
>>>>>>> adc5997 (OTAT-269: expert group base info and services is ready)
from ..serializers.commonserializers import AssessmentSubjectSerilizer, MetricCategorySerilizer, MetricSerilizer, QualityAttributeSerilizer, MetricCategoryBySubjectSerilizer
>>>>>>> 2946cf0 (make profile tag many to many)


class MetricCategoryViewSet(ModelViewSet):
    serializer_class = MetricCategorySerilizer

    def get_queryset(self):
        return MetricCategory.objects.all()


class MetricViewSet(ModelViewSet):
    serializer_class = MetricSerilizer
    def get_queryset(self):
        return Metric.objects.filter(metric_category_id=self.kwargs['metric_category_pk']).order_by('index')


class MetricCategoryBySubjectViewSet(ModelViewSet):
    serializer_class = MetricCategoryBySubjectSerilizer
    def get_queryset(self):
        return MetricCategory.objects.prefetch_related('assessment_subjects').filter(assessment_subjects__id=self.kwargs['assessment_subject_pk']).order_by('index')


class AssessmentSubjectViewSet(ModelViewSet):
    serializer_class = AssessmentSubjectSerilizer

    def get_queryset(self):
        return AssessmentSubject.objects.all().order_by('index')


class QualityAttributeViewSet(ModelViewSet):
    serializer_class = QualityAttributeSerilizer

    def get_queryset(self):
        if 'assessment_subject_pk' in self.kwargs:
            return QualityAttribute.objects.filter(assessment_subject_id=self.kwargs['assessment_subject_pk']).order_by('index');
        else:
            return QualityAttribute.objects.all().order_by('index')
            


