from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Todo API. Go to /api/todos/ to see the todos.")
