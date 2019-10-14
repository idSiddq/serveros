#!/usr/bin/perl
#
# Copyright (c) 2010-2015 Apple Inc. All rights reserved.
# 
# IMPORTANT NOTE: This file is licensed only for use on Apple-branded
# computers and is subject to the terms and conditions of the Apple Software
# License Agreement accompanying the package this file is a part of.
# You may not port this file to another platform without Apple's written consent.
# 
# Redistribution and use in source and binary forms, with or without  
# modification, are permitted provided that the following conditions  
# are met:
# 
# 1.  Redistributions of source code must retain the above copyright  
# notice, this list of conditions and the following disclaimer.
# 2.  Redistributions in binary form must reproduce the above  
# copyright notice, this list of conditions and the following  
# disclaimer in the documentation and/or other materials provided  
# with the distribution.
# 3.  Neither the name of Apple Inc. ("Apple") nor the names of its  
# contributors may be used to endorse or promote products derived  
# from this software without specific prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND  
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,  
# THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  
# PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS  
# CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,  
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT  
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF  
# USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND  
# ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,  
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT  
# OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF  
# SUCH DAMAGE.

use File::Copy;
use File::Path;
use Foundation;

# Server Root Path
my $_server_root = "/Applications/Server.app/Contents/ServerRoot";

# set sendmail to use server config
system( "/usr/sbin/postconf -c /etc/postfix -e mail_owner=_postfix" );
system( "/usr/sbin/postconf -c /etc/postfix -e setgid_group=_postdrop" );
system( "/usr/sbin/postconf -c /etc/postfix -e server_config_directory=/Library/Server/Mail/Config/postfix" );

# set exclude ciphers
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e smtpd_tls_exclude_ciphers='SSLv2, 3DES, aNULL, ADH, eNULL, EXPORT'" );

# set compatibility level
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e compatibility_level=2" );

# copy current version of postfix-files
copy( "$_server_root/Library/Server/Mail/Config/postfix/postfix-files", "/Library/Server/Mail/Config/postfix/postfix-files" );

# set default keys
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e smtp_tls_loglevel=1" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e smtp_tls_security_level=may" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e config_directory=/Library/Server/Mail/Config/postfix" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e data_directory=/Library/Server/Mail/Data/mta" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e command_directory=/Applications/Server.app/Contents/ServerRoot/usr/sbin" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e daemon_directory=/Applications/Server.app/Contents/ServerRoot/usr/libexec/postfix" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e sendmail_path=/Applications/Server.app/Contents/ServerRoot/usr/sbin/sendmail" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e mailq_path=/Applications/Server.app/Contents/ServerRoot/usr/bin/mailq" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e html_directory=/Applications/Server.app/Contents/ServerRoot/usr/share/doc/postfix/html" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e manpage_directory=/Applications/Server.app/Contents/ServerRoot/usr/share/man" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e sample_directory=/Applications/Server.app/Contents/ServerRoot/usr/share/doc/postfix/examples" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e readme_directory=/Applications/Server.app/Contents/ServerRoot/usr/share/doc/postfix" );
system( "$_server_root/usr/sbin/postconf -c /Library/Server/Mail/Config/postfix -e smtpd_require_virtual_map=yes" );
