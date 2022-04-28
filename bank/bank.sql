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
    constraint fk_01 foreign key id_gestor references gestor(id)
);

create table mensaje (
	id int(11) auto_increment,
    id_origen int(11),
    id_destino int(11),
    texto char(140),
    fecha datetime,
    primary key (id),
    constraint fk_02 foreign key id_origen references gestor(id),
    constraint fk_03 foreign key id_destino references gestor(id)
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
    constraint fk_04 foreign key id_ordenante references cliente(id),
    constraint fk_05 foreign key id_beneficiario references cliente(id)
);

create table prestamo_relacion(
	id_prestamo int(11),
    id_cliente int(11),
    primary key (id),
    constraint fk_06 foreign key id_prestamo references prestamo(id),
    constraint fk_07 foreign key id_cliente references cliente(id)
);

create table prestamo(
	id int(11),
    nombre char(20),
    comision double,
    meses int(11),
    primary key (id)
);


