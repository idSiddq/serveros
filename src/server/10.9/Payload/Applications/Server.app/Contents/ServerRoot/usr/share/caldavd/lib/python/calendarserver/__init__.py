# -*- test-case-name: calendarserver -*-
##
# Copyright (c) 2005-2014 Apple Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
##

"""
CalendarServer application code.
"""

# Make sure we have twext's required Twisted patches loaded before we do
# anything at all.
__import__("twext")

#
# setuptools is annoying
#
from warnings import filterwarnings
filterwarnings("ignore", "Module (.*) was already imported (.*)")
del filterwarnings

#
# Set __version__
#

try:
    from calendarserver.version import version as __version__
except ImportError:
    __version__ = None