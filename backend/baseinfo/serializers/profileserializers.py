from rest_framework import serializers
from ..models.profilemodels import AssessmentProfile, ProfileDsl, ProfileTag
from ..imagecomponent.serializers import ProfileImageSerializer
from .commonserializers import ExpertGroupSimpleSerilizers
from assessment.models import AssessmentProject
from ..services import profileservice


class ProfileDslSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
<<<<<<< HEAD
    class Meta:
        model = ProfileDsl
        fields = ['id', 'dsl_file']
=======
    def create(self, validated_data):
        profile_id = self.context['profile_id']
        try:
            profile_dsl = ProfileDsl.objects.get(profile_id=profile_id)
            profile_dsl.dsl = validated_data['dsl']
            profile_dsl.save()
            return profile_dsl
        except ProfileDsl.DoesNotExist:
            return ProfileDsl.objects.create(profile_id=profile_id, **validated_data)

    def update(self, instance, validated_data):
        profile_id = self.context['profile_id']
        return ProfileDsl.objects.update(profile_id=profile_id, **validated_data)

    class Meta:
        model = ProfileDsl
        fields = ['id', 'dsl']
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
    class Meta:
        model = ProfileDsl
        fields = ['id', 'dsl_file']
>>>>>>> d2cf4b2 (change upload file for dsl)

class ProfileTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileTag
        fields = ['id', 'code', 'title']

class AssessmentProfileSerilizer(serializers.ModelSerializer):
    images = ProfileImageSerializer(many=True)
<<<<<<< HEAD
    metric_categories = MetricCategorySerilizer(many=True)
    assessment_subjects = AssessmentSubjectSerilizer(many=True)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images']
=======
    dsl = ProfileDslSerializer()
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images', 'dsl']
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images']
>>>>>>> 1c9b809 (remove extra dsl field from profile)
=======
=======
>>>>>>> 0c3a6ff (OTAT-283: profile delete service is ready)
    tags =  ProfileTagSerializer(many = True)
    expert_group = ExpertGroupSimpleSerilizers()
    number_of_assessment = serializers.SerializerMethodField()
    current_user_delete_permission = serializers.SerializerMethodField()
    current_user_is_coordinator = serializers.SerializerMethodField()
    number_of_subject = serializers.SerializerMethodField()
    number_of_questionaries = serializers.SerializerMethodField()

    def get_number_of_assessment(self, profile: AssessmentProfile):
        return AssessmentProject.objects.filter(assessment_profile_id = profile.id).count()

    def get_current_user_delete_permission(self, profile: AssessmentProfile):
        return profileservice.get_current_user_delete_permission(profile, self.context.get('request', None).user.id)

    def get_current_user_is_coordinator(self, profile: AssessmentProfile):
        return profileservice.get_current_user_is_coordinator(profile, self.context.get('request', None).user.id)

    def get_number_of_subject(self, profile: AssessmentProfile):
        return profile.assessment_subjects.all().count()

    def get_number_of_questionaries(self, profile: AssessmentProfile):
        return profile.metric_categories.all().count()
    
    class Meta:
        model = AssessmentProfile
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images', 'tags']
>>>>>>> 055f1b9 (Add tag to profile display)
=======
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images', 'tags', 'expert_group']
>>>>>>> 365b8eb (OTAT-269: enrich expert_group service)
=======
        fields = ['id', 'code', 'title', 'description', 'images', 'tags', 'expert_group', 'number_of_assessment', 'current_user_delete_permission']
>>>>>>> 0c3a6ff (OTAT-283: profile delete service is ready)
=======
        fields = ['id', 'code', 'title', 'summary', 'about', 'images', 'tags', 'expert_group', 'number_of_assessment', 'current_user_delete_permission']
>>>>>>> 9636b53 (OTAT-310: Add about to profile and related services)
=======
        fields = ['id', 'code', 'title', 'summary', 'about', 'images', 'tags', 'expert_group', 
        'creation_time', 'last_modification_date', 'likes', 'number_of_subject', 'number_of_questionaries',
        'number_of_assessment', 'current_user_delete_permission', 'is_active', 'current_user_is_coordinator']
>>>>>>> 928d4ae (organize profile diffrent services)

class AssessmentProfileCreateSerilizer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentProfile
        fields = ['id']


class ImportProfileSerializer(serializers.Serializer):
    tag_ids = serializers.ListField(child=serializers.IntegerField())
    expert_group_id = serializers.IntegerField()
    dsl_id = serializers.IntegerField()
    




