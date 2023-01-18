from rest_framework import serializers


<<<<<<< HEAD
<<<<<<< HEAD
from ..services.metricstatistic import extract_total_progress
from ..models import AssessmentProject
from .commonserializers import ColorSerilizer
from baseinfo.serializers.profileserializers import AssessmentProfileSerilizer, AssessmentProfileSimpleSerilizer
<<<<<<< HEAD
=======
from ..fixture.metricstatistic import extract_total_progress
=======
from ..services.metricstatistic import extract_total_progress
>>>>>>> c87d367 (OTAT-232: compare service is ready now)
from ..models import AssessmentProject
from .commonserializers import ColorSerilizer
from baseinfo.serializers import AssessmentProfileSerilizer, AssessmentProfileSimpleSerilizer
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
from account.serializers import SpaceSimpleSerializer


class AssessmentProjectListSerilizer(serializers.ModelSerializer):
    assessment_profile = AssessmentProfileSerilizer()
    id = serializers.UUIDField(read_only=True)
    color = ColorSerilizer()
    total_progress = serializers.SerializerMethodField()

    def get_total_progress(self, project: AssessmentProject):
        return extract_total_progress(project.get_assessment_result())
        
    class Meta:
        model = AssessmentProject
        fields = ['id', 'code', 'title', 'assessment_profile', 'last_modification_date', 'status', 'color', 'assessment_results', 'total_progress']

class AssessmentProjecCreateSerilizer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = AssessmentProject
        fields = ['id', 'title', 'color', 'space']

class AssessmentProjectCompareSerilizer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    color = ColorSerilizer()
    space = SpaceSimpleSerializer()
    assessment_profile = AssessmentProfileSimpleSerilizer()
    total_progress = serializers.SerializerMethodField()

    def get_total_progress(self, project: AssessmentProject):
        return extract_total_progress(project.get_assessment_result())
    class Meta:
        model = AssessmentProject
        fields = ['id', 'code', 'title', 'assessment_profile', 'last_modification_date', 'status', 'color', 'assessment_results', 'space', 'total_progress']


class AssessmentProjectSimpleSerilizer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    color = ColorSerilizer()
    space = SpaceSimpleSerializer()
    assessment_profile = AssessmentProfileSimpleSerilizer()

    class Meta:
        model = AssessmentProject
        fields = ['id', 'code', 'title', 'assessment_profile', 'last_modification_date', 'status', 'color', 'space']

