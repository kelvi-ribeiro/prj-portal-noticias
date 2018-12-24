CREATE TABLE noticia (
	id_noticia int NOT NULL PRIMARY key AUTO_INCREMENT,
	titulo varchar (100),
	noticia text,
	resumo varchar(100),
	autor varchar(40),
    data_noticia date,
	data_criacao timestamp default CURRENT_TIMESTAMP
);