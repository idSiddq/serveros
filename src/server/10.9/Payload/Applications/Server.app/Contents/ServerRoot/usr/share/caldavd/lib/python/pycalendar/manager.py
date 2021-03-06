##
#    Copyright (c) 2007-2012 Cyrus Daboo. All rights reserved.
#
#    Licensed under the Apache License, Version 2.0 (the "License");
#    you may not use this file except in compliance with the License.
#    You may obtain a copy of the License at
#
#        http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.
##

from pycalendar.timezone import PyCalendarTimezone

class PyCalendarManager(object):

    sICalendarManager = None

    def __init__(self):
        PyCalendarTimezone.sDefaultTimezone = PyCalendarTimezone()


    def initManager(self):
        # TODO: - read in timezones from vtimezones.ics file

        # Eventually we need to read these from prefs - for now they are
        # hard-coded to my personal prefs!
        self.setDefaultTimezone(PyCalendarTimezone(utc=False, tzid="US/Eastern"))


    def setDefaultTimezoneID(self, tzid):
        # Check for UTC
        if tzid == "UTC":
            temp = PyCalendarTimezone(utc=True)
            self.setDefaultTimezone(temp)
        else:
            temp = PyCalendarTimezone(utc=False, tzid=tzid)
            self.setDefaultTimezone(temp)


    def setDefaultTimezone(self, tzid):
        PyCalendarTimezone.sDefaultTimezone = tzid


    def getDefaultTimezoneID(self):
        if PyCalendarTimezone.sDefaultTimezone.getUTC():
            return "UTC"
        else:
            return PyCalendarTimezone.sDefaultTimezone.getTimezoneID()


    def getDefaultTimezone(self):
        return PyCalendarTimezone.sDefaultTimezone

PyCalendarManager.sICalendarManager = PyCalendarManager()
