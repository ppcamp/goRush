-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-06-07 13:23:08.623

-- tables
-- Table: conteudo
CREATE TABLE `conteudo` (
    `id_conteudo` int NOT NULL AUTO_INCREMENT,
    `titulo` varchar(30) NOT NULL,
    `texto` text NOT NULL,
    `logins_nick` varchar(15) NOT NULL,
    CONSTRAINT `conteudo_pk` PRIMARY KEY (`id_conteudo`)
);

-- Table: historico_saldo_credito
--CREATE TABLE `historico_saldo_credito` (
--    `id_historico` int NOT NULL AUTO_INCREMENT,
--    `dataHora` timestamp NOT NULL,
--    `logins_nick` varchar(15) NOT NULL,
--    CONSTRAINT `historico_saldo_credito_pk` PRIMARY KEY (`id_historico`)
--);

-- Table: logins
CREATE TABLE `logins` (
    `nome` varchar(30) NOT NULL,
    `senha` varchar(30) NOT NULL,
    `nick` varchar(15) NOT NULL,
    `credito` int NOT NULL,
    `moeda` int NOT NULL,
    `email` varchar(40) NOT NULL,
    CONSTRAINT `logins_pk` PRIMARY KEY (`nick`)
);

-- foreign keys
-- Reference: conteudo_logins (table: conteudo)
ALTER TABLE `conteudo` ADD CONSTRAINT `conteudo_logins` FOREIGN KEY `conteudo_logins` (`logins_nick`)
    REFERENCES `logins` (`nick`);

-- Reference: historico_saldo_credito_logins (table: historico_saldo_credito)
--ALTER TABLE `historico_saldo_credito` ADD CONSTRAINT `historico_saldo_credito_logins` FOREIGN KEY `historico_saldo_credito_logins` (`logins_nick`)
--    REFERENCES `logins` (`nick`);

-- End of file.

