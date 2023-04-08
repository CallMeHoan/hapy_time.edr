window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-34802","object_id":"column-34802","name":"_id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34803","object_id":"column-34803","name":"tenant_id","name_without_path":"tenant_id","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[{"id":"t3763","name":"tenants","name_show_schema":"happy_time.tenants"}],"linked_lookup":null},{"id":"column-34804","object_id":"column-34804","name":"is_deleted","name_without_path":"is_deleted","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34805","object_id":"column-34805","name":"create_by","name_without_path":"create_by","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34814","object_id":"column-34814","name":"create_by.name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"create_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34815","object_id":"column-34815","name":"create_by.agent_id","name_without_path":"agent_id","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"create_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34816","object_id":"column-34816","name":"create_by.updated_at","name_without_path":"updated_at","description":"","is_pk":false,"is_identity":false,"data_type":"Int64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"create_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34817","object_id":"column-34817","name":"create_by.action","name_without_path":"action","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"create_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34806","object_id":"column-34806","name":"last_update_by","name_without_path":"last_update_by","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34818","object_id":"column-34818","name":"last_update_by.name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"last_update_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34819","object_id":"column-34819","name":"last_update_by.agent_id","name_without_path":"agent_id","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"last_update_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34820","object_id":"column-34820","name":"last_update_by.updated_at","name_without_path":"updated_at","description":"","is_pk":false,"is_identity":false,"data_type":"Int64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"last_update_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34821","object_id":"column-34821","name":"last_update_by.action","name_without_path":"action","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"last_update_by","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34807","object_id":"column-34807","name":"ip_name","name_without_path":"ip_name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34808","object_id":"column-34808","name":"ip_name_unsigned","name_without_path":"ip_name_unsigned","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34809","object_id":"column-34809","name":"ip_address","name_without_path":"ip_address","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34810","object_id":"column-34810","name":"status","name_without_path":"status","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34811","object_id":"column-34811","name":"created_date","name_without_path":"created_date","description":"","is_pk":false,"is_identity":false,"data_type":"Int64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34812","object_id":"column-34812","name":"last_updated_date","name_without_path":"last_updated_date","description":"","is_pk":false,"is_identity":false,"data_type":"Int64","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-34813","object_id":"column-34813","name":"_class","name_without_path":"_class","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"fk_tenants_ip_config","title":"","description":"","is_user_defined":true,"foreign_table":"ip_config","foreign_table_show_schema":"happy_time.ip_config","foreign_table_verbose":"ip_config","foreign_table_verbose_show_schema":"happy_time.ip_config","foreign_table_object_id":"t3755","primary_table":"tenants","primary_table_show_schema":"happy_time.tenants","primary_table_verbose":"tenants","primary_table_verbose_show_schema":"happy_time.tenants","primary_table_object_id":"t3763","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"","foreign_column":"tenant_id"}],"custom_fields":{}}],"unique_keys":[{"name":"_id","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":"","name_without_path":"_id","name":"_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"ip_config","object_name_show_schema":"happy_time.ip_config","object_type":"TABLE","object_id":"t3755","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"tenants","object_name_show_schema":"happy_time.tenants","object_type":"TABLE","object_id":"t3763","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}],"used_by":[]},"object_id":"t3755","name":"ip_config","subtype":"COLLECTION","is_user_defined":false,"description":"","summary":[{"field":"Documentation","value":{"_type":"link","name":"happy_time@cluster0.ddjrfge.mongodb.net","id":"d10"}},{"field":"Schema","value":"happy_time"},{"field":"Name","value":"ip_config"},{"field":"Type","value":"Collection"},{"field":"Subject Area","value":[{"_type":"link","name":"ERD Happy Time","id":"m119"}]}],"script":null,"imported_at":"2023-04-08 14:07"};