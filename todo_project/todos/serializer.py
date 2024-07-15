from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'completed']
        read_only_fields = ['id']

    def update(self, instance, validated_data):
        instance.completed = validated_data.get('completed', instance.completed)
        instance.save()
        return instance
