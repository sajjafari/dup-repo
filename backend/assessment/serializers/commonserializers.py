from rest_framework import serializers

<<<<<<< HEAD
<<<<<<< HEAD
from baseinfo.serializers.commonserializers import QualityAttributeSerilizer
=======
from baseinfo.serializers import QualityAttributeSerilizer
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
from baseinfo.serializers.commonserializers import QualityAttributeSerilizer
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
from ..models import AssessmentResult, Color, QualityAttributeValue


class ColorSerilizer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = Color
        fields = ['id', 'title', 'color_code']


class AssessmentResultSerilizer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = AssessmentResult
        fields = ['id', 'assessment_project']


class QualityAttributeValueSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    quality_attribute = QualityAttributeSerilizer()
    class Meta:
        model = QualityAttributeValue
        fields = ['id', 'maturity_level_value', 'assessment_result', 'quality_attribute']