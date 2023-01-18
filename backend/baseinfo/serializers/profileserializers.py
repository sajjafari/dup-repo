from rest_framework import serializers
from ..models import AssessmentProfile, ProfileDsl, ProfileTag
from ..imagecomponent.serializers import ProfileImageSerializer
from ..serializers.commonserializers import MetricCategorySerilizer, AssessmentSubjectSerilizer

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
    tags =  ProfileTagSerializer(many = True)
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'metric_categories', 'assessment_subjects', 'description', 'images', 'tags']
>>>>>>> 055f1b9 (Add tag to profile display)

class AssessmentProfileCreateSerilizer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentProfile
        fields = ['id']

class AssessmentProfileSimpleSerilizer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentProfile
        fields = ['id', 'code', 'title', 'description']



