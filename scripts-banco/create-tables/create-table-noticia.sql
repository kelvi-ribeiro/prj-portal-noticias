CREATE TABLE noticia (
	id_noticia int NOT NULL PRIMARY key AUTO_INCREMENT,
	titulo varchar (100),
	noticia text,
	data_criacao timestamp default CURRENT_TIMESTAMP
);