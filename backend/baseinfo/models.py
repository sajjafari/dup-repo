from django.db import models
# Create your models here.


class AssessmentProfile(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField()
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modification_date = models.DateTimeField(auto_now=True)
    is_default = models.BooleanField(default=False)

    def save(self):
        if(self.is_default == True):
            default_profile = AssessmentProfile.objects.filter(is_default=True).first()
            if(default_profile and self.id != default_profile.id):
                default_profile.is_default = False
                default_profile.save()
        return super(AssessmentProfile, self).save()

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "Assessment Profile"
        verbose_name_plural = "Assessment Profiles"
        ordering = ['title']
<<<<<<< HEAD
<<<<<<< HEAD

class ProfileDsl(models.Model):
    dsl_file = models.FileField(upload_to='profile/dsl')
=======
        

>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======

class ProfileDsl(models.Model):
<<<<<<< HEAD
    dsl = models.FileField(upload_to='profile/dsl')
    profile = models.OneToOneField(AssessmentProfile, on_delete=models.CASCADE, related_name='dsl')
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
    dsl_file = models.FileField(upload_to='profile/dsl')
>>>>>>> d2cf4b2 (change upload file for dsl)

class ProfileTag(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    profiles = models.ManyToManyField(AssessmentProfile, related_name = 'tags')

    class Meta:
        verbose_name = 'Profile Tag'
        verbose_name_plural = "Profile Tags"

    def __str__(self) -> str:
        return self.title

class MetricCategory(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField()
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modification_date = models.DateTimeField(auto_now=True)
    assessment_profile = models.ForeignKey(AssessmentProfile, on_delete=models.PROTECT, related_name='metric_categories')
    index = models.PositiveIntegerField(null=True)

    class Meta:
        verbose_name = 'Metric Category'
        verbose_name_plural = "Metric Categories"

    def __str__(self) -> str:
        return self.title

class AssessmentSubject(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField()
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modification_date = models.DateTimeField(auto_now=True)
    assessment_profile = models.ForeignKey(AssessmentProfile, on_delete=models.PROTECT, related_name='assessment_subjects')
    metric_categories = models.ManyToManyField(MetricCategory, related_name = 'assessment_subjects')
    index = models.PositiveIntegerField(null=True)

    class Meta:
        verbose_name = 'Assessment Subject'
        verbose_name_plural = "Assessment Subjects"

    def __str__(self) -> str:
        return self.title


class QualityAttribute(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField()
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modification_date = models.DateTimeField(auto_now=True)
    assessment_subject = models.ForeignKey(AssessmentSubject, on_delete=models.CASCADE)
    index = models.PositiveIntegerField(null=True)

    class Meta:
        verbose_name = 'Quality Attribute'
        verbose_name_plural = "Quality Attributes"

    def __str__(self) -> str:
        return self.title


class MetricImpact(models.Model):
    level = models.PositiveIntegerField()
    metric = models.ForeignKey('Metric', on_delete=models.CASCADE, related_name='metric_impacts')
    quality_attribute = models.ForeignKey('QualityAttribute', on_delete=models.CASCADE, related_name='metric_impacts')

class AnswerTemplate(models.Model):
    metric = models.ForeignKey('Metric', on_delete=models.CASCADE, related_name='answer_templates')
    caption = models.CharField(max_length=255)
    value = models.PositiveSmallIntegerField()
    index = models.PositiveIntegerField(null=True)    

class Metric(models.Model):
    title = models.TextField()
<<<<<<< HEAD
<<<<<<< HEAD
    description = models.TextField(null=True)
=======
    description = models.TextField()
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
=======
    description = models.TextField(null=True)
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modification_date = models.DateTimeField(auto_now=True)
    metric_category = models.ForeignKey(MetricCategory, on_delete=models.CASCADE)
    quality_attributes = models.ManyToManyField(QualityAttribute, through=MetricImpact)
    index = models.IntegerField(null=True)

    class Meta:
        verbose_name = 'Metric'
        verbose_name_plural = "Metrics"

    def __str__(self) -> str:
        return self.title
