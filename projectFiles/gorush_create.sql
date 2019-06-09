-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-06-07 14:34:05.761

-- tables
-- Table: conteudo
CREATE TABLE `conteudo` (
    `id_conteudo` int NOT NULL AUTO_INCREMENT,
    `titulo` varchar(30) NOT NULL,
    `texto` text NOT NULL,
    `logins_nick` varchar(15) NOT NULL,
    CONSTRAINT `conteudo_pk` PRIMARY KEY (`id_conteudo`)
);

-- Table: historicoCompra
CREATE TABLE `historicoCompra` (
    `id_historicoCompra` int NOT NULL AUTO_INCREMENT,
    `dataHora` timestamp NOT NULL,
    `valor` int NOT NULL,
    `logins_nick` varchar(15) NOT NULL,
    CONSTRAINT `historicoCompra_pk` PRIMARY KEY (`id_historicoCompra`)
);

-- Table: historicoInsert
CREATE TABLE `historicoInsert` (
    `id_historicoInsert` int NOT NULL AUTO_INCREMENT,
    `dataHora` timestamp NOT NULL,
    `logins_nick` varchar(15) NOT NULL,
    `valor` int NOT NULL,
    CONSTRAINT `historicoInsert_pk` PRIMARY KEY (`id_historicoInsert`)
);

-- Table: logins
CREATE TABLE `logins` (
    `nome` varchar(30) NOT NULL,
    `senha` varchar(30) NOT NULL,
    `nick` varchar(15) NOT NULL,
    `credito` int NOT NULL,
    `email` varchar(40) NOT NULL,
    CONSTRAINT `logins_pk` PRIMARY KEY (`nick`)
);

-- foreign keys
-- Reference: conteudo_logins (table: conteudo)
ALTER TABLE `conteudo` ADD CONSTRAINT `conteudo_logins` FOREIGN KEY `conteudo_logins` (`logins_nick`)
    REFERENCES `logins` (`nick`);

-- Reference: historicoCompra_logins (table: historicoCompra)
ALTER TABLE `historicoCompra` ADD CONSTRAINT `historicoCompra_logins` FOREIGN KEY `historicoCompra_logins` (`logins_nick`)
    REFERENCES `logins` (`nick`);

-- Reference: historico_saldo_credito_logins (table: historicoInsert)
ALTER TABLE `historicoInsert` ADD CONSTRAINT `historico_saldo_credito_logins` FOREIGN KEY `historico_saldo_credito_logins` (`logins_nick`)
    REFERENCES `logins` (`nick`);

-- End of file.

