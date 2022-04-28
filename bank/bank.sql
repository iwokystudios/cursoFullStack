create schema banco;

use banco;

create table cliente (
	id int(11) auto_increment,
    id_gestor int(11),
    usuario char(20),
    password char(64),
    correo char(50)
    saldo double,
    primary key (id),

);

create table mensaje (
	id int(11) auto_increment,
    id_origen int(11),
    id_destino int(11),
    texto char(140),
    fecha datetime,
    primary key (id),

);

create table gestor (
	id int(11),
    usuario char(20),
    password char(64),
    correo char(50),
    primary key (id)
);


create table transferencia(
	id int(11) auto_increment,
    id_ordenante int(11),
    id_beneficiario int(11),
    importe double,
    concepto varchar(40),
    fecha datetime,
    primary key (id),

);

create table prestamo_relacion(
	id_prestamo int(11),
    id_cliente int(11),
    primary key (id),

);

create table prestamo(
	id int(11),
    nombre char(20),
    comision double,
    meses int(11),
    primary key (id)
);


    -- constraint fk_01 foreign key id_gestor references gestor(id)

    -- constraint fk_02 foreign key id_origen references gestor(id),
    -- constraint fk_03 foreign key id_destino references gestor(id)

    -- constraint fk_04 foreign key id_ordenante references cliente(id),
    -- constraint fk_05 foreign key id_beneficiario references cliente(id)

    -- constraint fk_06 foreign key id_prestamo references prestamo(id),
    -- constraint fk_07 foreign key id_cliente references cliente(id)

ALTER TABLE cliente
ADD CONSTRAINT FK_01
FOREIGN KEY (id_gestor) REFERENCES gestor(id); 

ALTER TABLE mensaje
ADD CONSTRAINT FK_02
FOREIGN KEY (id_origen) REFERENCES gestor(id); 

ALTER TABLE mensaje
ADD CONSTRAINT FK_03
FOREIGN KEY (id_destino) REFERENCES gestor(id); 

ALTER TABLE transferencia
ADD CONSTRAINT FK_04
FOREIGN KEY (id_ordenante) REFERENCES cliente(id); 

ALTER TABLE transferencia
ADD CONSTRAINT FK_05
FOREIGN KEY (id_beneficiario) REFERENCES cliente(id); 

ALTER TABLE prestamo_relacion
ADD CONSTRAINT FK_06
FOREIGN KEY (id_prestamo) REFERENCES prestamo(id); 

ALTER TABLE prestamo_relacion
ADD CONSTRAINT FK_07
FOREIGN KEY (id_cliente) REFERENCES cliente(id);