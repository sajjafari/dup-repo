<<<<<<< HEAD
<<<<<<< HEAD
import requests
import traceback
from zipfile import ZipFile
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

from ..services import profileservice
from ..services import importprofileservice
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from ..serializers.profileserializers import ProfileDslSerializer
<<<<<<< HEAD
from ..models import ProfileDsl

DSL_PARSER_URL_SERVICE = "http://dsl:8080/extract/"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import requests
from zipfile import ZipFile
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response

<<<<<<< HEAD
>>>>>>> 3015a1a (display profile by rest service)
=======
from ..services import profileservice
from ..services import importprofileservice
from ..serializers.profileserializers import ProfileDslSerializer
from ..serializers.commonserializers import FileUploadSerializer
from ..models import ProfileDsl
import traceback
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
=======
from ..models import ProfileDsl
>>>>>>> d2cf4b2 (change upload file for dsl)
=======
>>>>>>> 12b3703 (add dsl parser app to docker compose)
=======
>>>>>>> 9633745 (add dsl parser app to docker compose)
=======
=======
from ..services import expertgroupservice
>>>>>>> adc5997 (OTAT-269: expert group base info and services is ready)
=======
>>>>>>> 365b8eb (OTAT-269: enrich expert_group service)
from ..serializers.profileserializers import ProfileDslSerializer, AssessmentProfileSerilizer, ProfileTagSerializer
from ..models.profilemodels import ProfileDsl, ProfileTag, AssessmentProfile
from assessment.models import AssessmentProject

DSL_PARSER_URL_SERVICE = "http://dsl:8080/extract/"

class AssessmentProfileViewSet(ModelViewSet):
    serializer_class = AssessmentProfileSerilizer
    filter_backends=[DjangoFilterBackend, SearchFilter]
    filterset_fields = ['metric_categories']
    search_fields = ['title']

    def get_queryset(self):
        queryset = AssessmentProfile.objects.all()
        metric_categories = self.request.query_params.get('metric_categories')
        if metric_categories is not None:
            queryset = queryset.filter(metric_categories=metric_categories)
        return queryset

    def destroy(self, request, *args, **kwargs):
        profile = profileservice.load_profile(kwargs['pk'])
        if profile is None:
            error_message = 'The Assessment Profile with given Id {profile_id} does not exists'.format(profile_id = profile.id)
            return Response({'message': error_message}, status=status.HTTP_400_BAD_REQUEST)
        qs = AssessmentProject.objects.filter(assessment_profile_id = profile.id)
        if qs.count() > 0:
            return Response({'message': 'Some assessment with this profile exist'}, status=status.HTTP_400_BAD_REQUEST)
        
        if profile.expert_group is not None:
            user = profile.expert_group.users.filter(id = request.user.id)
            if user.count() == 0:
                return Response({'message': 'The current user does not have permission for deleting profile'}, status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, ** kwargs)

class ProfileTagViewSet(ModelViewSet):
    serializer_class = ProfileTagSerializer
    def get_queryset(self):
        return ProfileTag.objects.all()
>>>>>>> 2946cf0 (make profile tag many to many)

class ProfileDetailDisplayApi(APIView):
    def get(self, request, profile_id):
        profile = profileservice.load_profile(profile_id)
        if profile is None:
            error_message = "No profile is Found with the given profile_id {}".format(profile_id)
            return Response({"message": error_message}, status = status.HTTP_400_BAD_REQUEST)
<<<<<<< HEAD
<<<<<<< HEAD
        response = profileservice.extract_detail_of_profile(profile)
        return Response(response, status = status.HTTP_200_OK)
    
class UploadProfileApi(ModelViewSet):
    serializer_class = ProfileDslSerializer
<<<<<<< HEAD

    def get_queryset(self):
        return ProfileDsl.objects.all()

class ImportProfileApi(APIView):
    def post(self, request):
        dsl_id = request.data.get('dsl_id')
        dsl = ProfileDsl.objects.get(id = dsl_id)
        input_zip = ZipFile(dsl.dsl_file)
        dsl_contents = importprofileservice.extract_dsl_contents(input_zip)
<<<<<<< HEAD
        resp = requests.post(DSL_PARSER_URL_SERVICE, json={"dslContent": dsl_contents}).json()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9633745 (add dsl parser app to docker compose)
        if resp['hasError']:
=======
        base_infos_resp = requests.post(DSL_PARSER_URL_SERVICE, json={"dslContent": dsl_contents}).json()
        if base_infos_resp['hasError']:
>>>>>>> 2946cf0 (make profile tag many to many)
            return Response({"message": "The uploaded dsl is invalid."}, status = status.HTTP_400_BAD_REQUEST)
        try:
            extra_info = {}
            extra_info['tag_ids'] = request.data.get('tag_ids')
            extra_info['expert_group_id'] = request.data.get('expert_group_id')
            assessment_profile = importprofileservice.import_profile(base_infos_resp, extra_info)
            return Response({"message": "The profile imported successfully", "id": assessment_profile.id}, status = status.HTTP_200_OK)
        except Exception as e:
            message = traceback.format_exc()
            print(message)
<<<<<<< HEAD
            return Response({"message": "Error in importing profile"}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)


=======
        response = {}
        response['title'] = profile.title
        response['description'] = profile.description
        response['last_update'] = profile.last_modification_date
        response['creation_date'] = profile.creation_time
        response['profileInfos'] = profileservice.extract_profile_infos(profile)
        response['subjectsInfos'] = profileservice.extract_subjects_infos(profile)
        response['questionnaires'] = profileservice.extract_questionnaires_infos(profile)
=======
        response = profileservice.extract_detail_of_profile(profile)
>>>>>>> 471e98a (OTAT-248: import profile service is ready)
        return Response(response, status = status.HTTP_200_OK)
<<<<<<< HEAD
>>>>>>> 3015a1a (display profile by rest service)
=======
    
class UploadProfileApi(ModelViewSet):
    serializer_class = ProfileDslSerializer
    def get_serializer_context(self):
        return {'profile_id': self.kwargs['profile_pk']}
=======
>>>>>>> d2cf4b2 (change upload file for dsl)

    def get_queryset(self):
        return ProfileDsl.objects.all()

<<<<<<< HEAD
<<<<<<< HEAD
    

    
>>>>>>> 05e3e29 (Add upload service for profile and fix some issues in profile display)
=======
class ImportProfileApi(CreateAPIView):
    serializer_class = FileUploadSerializer
=======
class ImportProfileApi(APIView):
>>>>>>> d2cf4b2 (change upload file for dsl)
    def post(self, request):
        dsl_id = request.data.get('dsl_id')
        dsl = ProfileDsl.objects.get(id = dsl_id)
        input_zip = ZipFile(dsl.dsl_file)
        dsl_contents = importprofileservice.extract_dsl_contents(input_zip)
        resp = requests.post("http://localhost:8080/extract/", json={"dslContent": dsl_contents}).json()
=======
>>>>>>> 12b3703 (add dsl parser app to docker compose)
        if resp['hasError']:
            return Response({"message": "The uploaded dsl is invalid."}, status = status.HTTP_400_BAD_REQUEST)
        try:
            importprofileservice.import_profile(resp)
            return Response({"message": "The profile imported successfully", "resp": resp}, status = status.HTTP_200_OK)
        except Exception as e:
            message = traceback.format_exc()
            print(message)
            return Response({"message": "Error in importing profile"}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)


>>>>>>> 471e98a (OTAT-248: import profile service is ready)

    

=======
            return Response({"message": "Error in importing profile"}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)
>>>>>>> 365b8eb (OTAT-269: enrich expert_group service)
