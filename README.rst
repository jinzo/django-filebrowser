Django FileBrowser
==================

**Media-Management with theme support**.

The FileBrowser is an extension to the `Django <http://www.djangoproject.com>`_ administration interface in order to:

* browse directories on your server and upload/delete/edit/rename files.
* include images/documents to your models/database using the ``FileBrowseField``.
* select images/documents with TinyMCE.

Requirements
------------

FileBrowser 3.5 requires

* Django 1.4 or 1.5 or 1.6 (http://www.djangoproject.com)
* Pillow (https://github.com/python-imaging/Pillow)

Differences to upstream
-----------------------

The major difference in relation to upstream, is the support for themes, so various Django Admin intefraces can be used.
Currently only Django stock admin interface and Grappelli 2.4 or 2.5 are supported.

Further plans include support for pluggable upload frontends, django-xadmin support,...

Installation
------------

    pip install -e git+git@github.com:jinzo/django-filebrowser.git#egg=django-filebrowser

Documentation
-------------

Build it from
http://readthedocs.org/docs/django-filebrowser/

Translation
-----------

https://www.transifex.com/projects/p/django-filebrowser/

Releases
--------

* FileBrowser 3.5.5 (Development Version, not yet released)
* FileBrowser 3.5.4 (February 21st, 2014): Compatible with Django 1.4/1.5/1.6

Older versions are availabe at GitHub, but are not supported anymore.
