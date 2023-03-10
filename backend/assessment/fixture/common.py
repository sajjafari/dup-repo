from statistics import mean
from ..models import AssessmentProject, AssessmentResult
<<<<<<< HEAD
<<<<<<< HEAD
from ..services.metricstatistic import calculate_answered_metric_by_result
=======
from .metricstatistic import calculate_answered_metric_by_result
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
from ..services.metricstatistic import calculate_answered_metric_by_result
>>>>>>> c87d367 (OTAT-232: compare service is ready now)


ANSWERED_QUESTION_NUMBER_BOUNDARY = 5


STATUS_CHOICES = [
    ('WEAK', 'WEAK'),
    ('RISKY', 'RISKY'),
    ('NORMAL', 'NORMAL'),
    ('GOOD', 'GOOD'),
    ('OPTIMIZED', 'OPTIMIZED')
]

def calculate_staus(value):
    match value:
        case 1:
            return "WEAK"
        case 2:
            return "RISKY"
        case 3:
            return "NORMAL"
        case 4:
            return "GOOD"
        case 5:
            return "OPTIMIZED"


def update_assessment_status(result:AssessmentResult):
    total_answered_metric_number = calculate_answered_metric_by_result(result) 
    if total_answered_metric_number <= ANSWERED_QUESTION_NUMBER_BOUNDARY:
        status = None
    else:
        value = round(mean([item.maturity_level_value for item in result.quality_attribute_values.all()]))
        status = calculate_staus(value)
    assessment = AssessmentProject.objects.get(id = result.assessment_project.id)           
    assessment.status = status
    assessment.save()

