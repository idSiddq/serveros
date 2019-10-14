/**
 * Copyright (c) 2010-2014, Apple Inc. All rights reserved. 
 * 
 * IMPORTANT NOTE: This file is licensed only for use on Apple-branded
 * computers and is subject to the terms and conditions of the Apple Software
 * License Agreement accompanying the package this file is a part of.
 * You may not port this file to another platform without Apple's written consent.
 * 
 * IMPORTANT NOTE: This file is licensed only for use with the Wiki Server feature
 * of the Apple Software and is subject to the terms and conditions of the Apple
 * Software License Agreement accompanying the package this file is part of.
 **/
DROP TRIGGER update_changeset_moddates ON entity_changesets;

CREATE OR REPLACE FUNCTION trg_update_changeset_moddates() RETURNS trigger AS $trg_update_changeset_moddates$
DECLARE
	parent_uids_to_update varchar[];
BEGIN
	IF NEW.change_type <> 'quicklook' THEN
		SELECT INTO parent_uids_to_update parent_uids FROM entity WHERE uid = NEW.entity_uid_fk;
		UPDATE entity SET child_update_time = NEW.change_time, child_updatedby_user_fk = NEW.change_user_fk WHERE entity.uid :: varchar = ANY (parent_uids_to_update) OR entity.uid = NEW.entity_uid_fk;
	END IF;
	RETURN NEW;
END;
$trg_update_changeset_moddates$ LANGUAGE plpgsql;

CREATE TRIGGER update_changeset_moddates AFTER INSERT ON entity_changesets FOR EACH ROW EXECUTE PROCEDURE trg_update_changeset_moddates();