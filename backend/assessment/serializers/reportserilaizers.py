from statistics import mean
from rest_framework import serializers
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from baseinfo.serializers.profileserializers import AssessmentProfileSimpleSerilizer
=======
import more_itertools

from baseinfo.serializers import AssessmentProfileSimpleSerilizer
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
from baseinfo.serializers.profileserializers import AssessmentProfileSimpleSerilizer
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
from baseinfo.serializers.commonserializers import AssessmentProfileSimpleSerilizer
>>>>>>> be4d999 (OTAT-170: refactor account app views and serializers for invite members)
from assessment.serializers.commonserializers import ColorSerilizer
from account.serializers.commonserializers import SpaceSerializer


from ..models import AssessmentProject, AssessmentResult
from ..fixture.common import calculate_staus, ANSWERED_QUESTION_NUMBER_BOUNDARY
from ..fixture.dictionary import Dictionary
<<<<<<< HEAD
<<<<<<< HEAD
from ..services.metricstatistic import calculate_total_metric_number_by_subject, calculate_answered_metric_by_subject, extract_total_progress
from ..services.attributesstatistics import extract_most_significant_strength_atts, extract_most_significant_weaknessness_atts
=======
from ..fixture.metricstatistic import calculate_total_metric_number_by_subject, calculate_answered_metric_by_subject, extract_total_progress
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
from ..services.metricstatistic import calculate_total_metric_number_by_subject, calculate_answered_metric_by_subject, extract_total_progress
from ..services.attributesstatistics import extract_most_significant_strength_atts, extract_most_significant_weaknessness_atts
>>>>>>> c87d367 (OTAT-232: compare service is ready now)

class AssessmentProjectReportSerilizer(serializers.ModelSerializer):
    color = ColorSerilizer()
    space = SpaceSerializer()
    assessment_profile = AssessmentProfileSimpleSerilizer()
    class Meta:
        model = AssessmentProject
        fields = ['title', 'last_modification_date', 'color', 'assessment_results', 'space', 'assessment_profile']

                
class AssessmentReportSerilizer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField(method_name='calculate_total_status')
    assessment_project = AssessmentProjectReportSerilizer()
    subjects_info = serializers.SerializerMethodField(method_name='calculate_subjects_info')
    most_significant_strength_atts = serializers.SerializerMethodField()
    most_significant_weaknessness_atts = serializers.SerializerMethodField()
    total_progress = serializers.SerializerMethodField()

    def get_total_progress(self, result: AssessmentResult):
        return extract_total_progress(result)
        
    def calculate_subjects_info(self, result: AssessmentResult):
        subjects_info = []
        subjects = result.assessment_project.assessment_profile.assessment_subjects.all()
        quality_attribute_values = result.quality_attribute_values.all()
        for subject in subjects:
            subject_info = self.extract_base_info(subject)
            self.calculate_progress_param(result, subject, subject_info)

            if subject_info['total_answered_metric_number'] <= ANSWERED_QUESTION_NUMBER_BOUNDARY:
                subject_info.add("status", "Not Calculated")
            else:
                self.calculate_subject_status(quality_attribute_values, subject, subject_info)

            subjects_info.append(subject_info)
        return subjects_info 

    def calculate_subject_status(self, quality_attribute_values, subject, subject_info):
        subject_maturity_level_values = []
        for quality_attribute_value in quality_attribute_values:
            if quality_attribute_value.quality_attribute.assessment_subject.id == subject.id:
                subject_maturity_level_values.append(quality_attribute_value.maturity_level_value)
        if subject_maturity_level_values:
            subject_info.add("status", calculate_staus(round(mean(subject_maturity_level_values))))

    def extract_base_info(self, subject):
        subject_info = Dictionary()
        subject_info.add("id", subject.id)
        subject_info.add("title", subject.title)
        subject_info.add("description", subject.description)
        if subject.images.first() is not None:
            subject_info.add("image", subject.images.first().image.url)
        return subject_info

    def calculate_progress_param(self, result, subject, subject_info):
        total_metric_number = calculate_total_metric_number_by_subject(subject)
        total_answered_metric_number = calculate_answered_metric_by_subject(result, subject)
        
        if total_metric_number != 0:
            subject_info.add("progress", ((total_answered_metric_number / total_metric_number) * 100))
        else:
             subject_info.add("progress", 0)
        subject_info.add("total_metric_number", total_metric_number)
        subject_info.add("total_answered_metric_number", total_answered_metric_number) 


    def get_most_significant_strength_atts(self, result: AssessmentResult):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return extract_most_significant_strength_atts(result)
        
    def get_most_significant_weaknessness_atts(self, result: AssessmentResult):
        return extract_most_significant_weaknessness_atts(result)
=======
        quality_attributes = []
        if result.assessment_project.status is not None:
            for att_value in result.quality_attribute_values.order_by('-maturity_level_value').all():
                if att_value.maturity_level_value > 2:
                    quality_attributes.append(att_value.quality_attribute.title)
            return more_itertools.take(3, quality_attributes)
        else:
            return []
        
    def get_most_significant_weaknessness_atts(self, result: AssessmentResult):
        quality_attributes = []
        if result.assessment_project.status is not None and result.assessment_project.status:
            for att_value in result.quality_attribute_values.order_by('-maturity_level_value').all():
                if att_value.maturity_level_value < 3:
                    quality_attributes.append(att_value.quality_attribute.title)
            return more_itertools.take(3, reversed(quality_attributes))
        else:
            return []
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
        extract_most_significant_strength_atts(result)
        
    def get_most_significant_weaknessness_atts(self, result: AssessmentResult):
        extract_most_significant_weaknessness_atts(result)
>>>>>>> c87d367 (OTAT-232: compare service is ready now)
=======
        return extract_most_significant_strength_atts(result)
        
    def get_most_significant_weaknessness_atts(self, result: AssessmentResult):
        return extract_most_significant_weaknessness_atts(result)
>>>>>>> 57f0d83 (OTAT-232: fix some labels and issues)
    
    def calculate_total_status(self, result: AssessmentResult):
        if result.quality_attribute_values.all():
            assessment = AssessmentProject.objects.get(id = result.assessment_project_id)
            return assessment.status
        else:
            return "Not Calculated"

    class Meta:
        model = AssessmentResult
        fields = ['assessment_project', 'status', 'subjects_info', 'most_significant_strength_atts', 'most_significant_weaknessness_atts', 'total_progress']    