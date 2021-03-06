# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-17 16:12
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=50)),
                ('comment', models.CharField(max_length=400)),
                ('contact_time', models.DateTimeField(blank=True, default=datetime.datetime(2017, 1, 17, 16, 12, 44, 826394, tzinfo=utc))),
            ],
        ),
    ]
