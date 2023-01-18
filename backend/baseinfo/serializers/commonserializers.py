from rest_framework import serializers
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
from rest_framework.serializers import Serializer, FileField
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
=======
>>>>>>> d2cf4b2 (change upload file for dsl)
from ..models import AnswerTemplate, AssessmentSubject, Metric, MetricImpact, QualityAttribute, MetricCategory
=======
from ..models.basemodels import AssessmentSubject, QualityAttribute, MetricCategory
from ..models.metricmodels import AnswerTemplate, Metric, MetricImpact
<<<<<<< HEAD
>>>>>>> adc5997 (OTAT-269: expert group base info and services is ready)
=======
from ..models.profilemodels import AssessmentProfile, ExpertGroup
>>>>>>> be4d999 (OTAT-170: refactor account app views and serializers for invite members)
from ..imagecomponent.serializers import QualityAttributeImageSerializer, SubjectImageSerializer

class MetricCategorySerilizer(serializers.ModelSerializer):
    class Meta:
        model = MetricCategory
        fields = ['id', 'code', 'title', 'index']


class MetricCategoryBySubjectSerilizer(serializers.ModelSerializer):
    class Meta:
        model = MetricCategory
        fields = ['id', 'code', 'title', 'total_question', 'index']
    total_question = serializers.SerializerMethodField()

    def get_total_question(self, category:MetricCategory):
        metrics = MetricCategory.objects.get(pk = category.id).metric_set.all()
        return len(metrics)


class AssessmentSubjectSerilizer(serializers.ModelSerializer):
    images = SubjectImageSerializer(many=True)
    class Meta:
        model = AssessmentSubject
        fields = ['id', 'code', 'title', 'description', 'images', 'index']


class MetricImpactSerilizer(serializers.ModelSerializer):
    class Meta:
        model = MetricImpact
        fields = ['id', 'level', 'quality_attribute']


class QualityAttributeSerilizer(serializers.ModelSerializer):
    images = QualityAttributeImageSerializer(many=True)
    class Meta:
        model = QualityAttribute
        fields = ['id', 'code', 'title', 'description', 'images', 'index']

class AnswerTemplateSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = AnswerTemplate
        fields = ['id', 'caption', 'value', 'index']

class SimpleMetricSerializers(serializers.ModelSerializer):
    quality_attributes = QualityAttributeSerilizer(many=True)
    metric_impacts = MetricImpactSerilizer(many=True)
    class Meta:
        model = Metric
        fields = ['id', 'title', 'index', 'quality_attributes', 'metric_impacts']

class MetricSerilizer(serializers.ModelSerializer):
    answer_templates = AnswerTemplateSerializer(many=True)
    class Meta:
        model = Metric
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        fields = ['id', 'title', 'index', 'answer_templates']
<<<<<<< HEAD
=======
        fields = ['id', 'title', 'index', 'answer_templates']
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======

class FileUploadSerializer(Serializer):
    file = FileField()
    class Meta:
        fields = ('file',)
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
=======
        fields = ['id', 'title', 'index', 'answer_templates']
>>>>>>> d2cf4b2 (change upload file for dsl)
=======
        fields = ['id', 'title', 'index', 'answer_templates']

class AssessmentProfileSimpleSerilizer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'description']

class ExpertGroupSimpleSerilizers(serializers.ModelSerializer):
    class Meta:
        model = ExpertGroup
        fields = ['id', 'name', 'description']
>>>>>>> be4d999 (OTAT-170: refactor account app views and serializers for invite members)
