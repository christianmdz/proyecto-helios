create database if not exists circe;
use circe;

create table naves
(
	id int not null auto_increment primary key,
	comandante int not null,
	nombre varchar(25) not null,
	tripulacion int not null,
	afiliacion varchar(45),
	motor varchar(50) not null,
	carga int
);

create table misiones
(
	id int not null auto_increment primary key,
	id_nave int not null,
	nombre varchar(25) not null,
	descripcion varchar(450) not null,
	destino varchar(25) not null,
	fecha_inicio date not null,
	duracion int not null,
	foreign key(id_nave) references naves(id)
);

create table navegantes
(
	id int not null auto_increment primary key,
	id_nave int not null,
	username varchar(35) not null,
	password varchar(200) not null,
	nombre varchar(25) not null,
	apellido varchar(25) not null,
	email varchar(35) not null,
	rol varchar(25) not null,
	campo varchar(25) not null,
	foreign key(id_nave) references naves(id)
);

alter table naves add foreign key(comandante) references navegantes(id);

create table proyectos
(
	id int not null auto_increment primary key,
	director int not null,
	campo varchar(25) not null,
	nombre varchar(50) not null,
	descripcion varchar(450),
	fecha_inicio date not null,
	fecha_fin date not null,
	etapa varchar(25) not null,
	foreign key(director) references navegantes(id)
);

create table navegante_en_proyecto
(
  id int not null auto_increment primary key,
  id_navegante int not null,
  id_proyecto int not null,
  fecha_incorporacion date not null,
  dias_asignados int not null,
  foreign key(id_navegante) references navegantes(id),
  foreign key(id_proyecto) references proyectos(id)
);

create table tareas
(
	id int not null auto_increment primary key,
	responsable int not null,
	campo varchar(25) not null,
	nombre varchar(50) not null,
	descripcion varchar(450),
	frecuencia varchar(25) not null,
	foreign key(responsable) references navegantes(id)
);

create table navegante_en_tarea
(
	id int not null auto_increment primary key,
	id_navegante int not null,
	id_tarea int not null,
	fecha_incorporacion date not null,
	jornada varchar(25) not null,
	asignacion varchar(25) not null,
	foreign key(id_navegante) references navegantes(id),
	foreign	key(id_tarea) references tareas(id)
);


#create user imperio identified by 'trantor';
grant all PRIVILEGES on circe.* to imperio;

set foreign_key_checks = 0;

insert into naves (id, comandante, nombre, tripulacion, afiliacion, motor, carga)
values(1, 1, 'Circe', 10000, 'Flota XIII GEMINA', 'WARP: desplazamiento por curvatura', 36000);

insert into misiones (id, id_nave, nombre, descripcion, destino, fecha_inicio, duracion)
values (1, 1, 'Misión Ceres', 'Establecer colonia humana en el sistema Eridanus Prime', 'Eridanus IV', '2024-04-15', 3650);

insert into navegantes (id, id_nave, username, password, nombre, apellido, email, rol, campo) values
(1, 1, 'mjumilla', '$2a$10$m8wXY0xZj.xhZDaKbdWl5unu2nPatMp3iwYuqpu96kpQSuHBa2QLG', 'Manolo', 'Jumilla', 'mjumilla@helios.xr', 'ROLE_COMANDANTE', 'LIDER'),
(2, 1, 'blopera', '$2a$10$U3VnJvciHK2DAhLIISVeF..SklCV/v6lNwj6KZoDODQQCm9hqblcK', 'Benito', 'Lopera', 'blopera@helios.xr', 'ROLE_MANDO', 'INGENIERIA'),
(3, 1, 'tbieszka', '$2a$10$rLr/C5cyd6ggB4lWQByV4.C7KvxhOPBDGhX3Ek2Ug2yNuQGNpDQF6', 'Tania', 'Bieszka', 'tbieszka@helios.xr', 'ROLE_MANDO', 'CIENCIA'),
(4, 1, 'tormaechea', '$2a$10$t0Vj0MxnxdTyu3qLNP6EF.mxxjUzEksBWMOVLmS4e.J0LiylutL/i', 'Tino', 'Ormaechea', 'tormaechea@helios.xr', 'ROLE_MANDO', 'NAVEGACION'),
(5, 1, 'tato', '$2a$10$1tzk1p.MT.d8WGwyKZ7TSeFa.IL0cJcx8fH/uby5yjBUAekFVfu8e', 'Protestato', 'Leal', 'tato@helios.xr', 'ROLE_TRIPULANTE', 'INGENIERIA'),
(6, 1, 'jlopez', '$2a$10$RBCs4FhKusMl48O8hnedJeU/o/13TJ78jshQlD0dNpLW7bw0579ym', 'Juan', 'López', 'jlopez@helios.xr', 'ROLE_TRIPULANTE', 'INGENIERIA'),
(7, 1, 'mperez', '$2a$10$cvXOPrgzlTHbL22mrTtKzuJYaoQ3SNPYlBfOh3OFlPqsbM5Qadi8e', 'María', 'Pérez', 'mperez@helios.xr', 'ROLE_TRIPULANTE', 'CIENCIA'),
(8, 1, 'abarrios', '$2a$10$RPuyPVPTm8tRQzZ5S1VdaecKrEfcc3IFp.y1AkQ71t03Kjdif4NU2', 'Ana', 'Barrios', 'abarrios@helios.xr', 'ROLE_TRIPULANTE', 'NAVEGACION'),
(9, 1, 'jperez', '$2a$10$Oq/zM62WHW2UcZY1yr/Wi.PTF0d76lBb2EpMnfQn2w.tWT.EAgrMu', 'José', 'Pérez', 'jperez@helios.xr', 'ROLE_TRIPULANTE', 'INGENIERIA'),
(10, 1, 'lsanchez', '$2a$10$mM6ahKhzx2OZtdSOwmuH0.C4aKIXlyJZ4j5iAq9iTytu4jk4v53Lm', 'Laura', 'Sánchez', 'lsanchez@helios.xr', 'ROLE_TRIPULANTE', 'CIENCIA'),
(11, 1, 'jgonzalez', '$2a$10$ZtiJ0ZPoWVRTNoKPSUe9GOC2j.5xQJ.matWLqSgMvnNsjCkbDDYri', 'Javier', 'González', 'jgonzalez@helios.xr', 'ROLE_TRIPULANTE', 'NAVEGACION'),
(12, 1, 'mmartin', '$2a$10$XrJ/sGHnn2cAJKdkn/DHbOqE9Hu04I3rJy.QOFMNTlqnqRVq9N.Se', 'Manuel', 'Martín', 'mmartin@helios.xr', 'ROLE_TRIPULANTE', 'INGENIERIA'),
(13, 1, 'ablanco', '$2a$10$nkO4nRjBHfMMpRGwkLfai.8jFm04y9tB0/q5U89c/nOto1fcUPVj.', 'Ana', 'Blanco', 'ablanco@helios.xr', 'ROLE_TRIPULANTE', 'CIENCIA'),
(14, 1, 'jsanchez', '$2a$10$L.UhsxW9NuesrrjXPF1GP.tc1UXzqhvNGLD0kzdSc0J5FP290mita', 'Juan', 'Sánchez', 'jsanchez@helios.xr', 'ROLE_TRIPULANTE', 'NAVEGACION'),
(15, 1, 'mjimenez', '$2a$10$2n/5vybcWKKlOkmngHi7WeOw0BjTE8YoRBP7bpJFsAJthfOoMIvPK', 'María', 'Jiménez', 'mjmenez@helios.xr', 'ROLE_TRIPULANTE', 'NAVEGACION');

insert into proyectos (id, director, campo, nombre, descripcion, fecha_inicio, fecha_fin, etapa) values
(1, 2, 'INGENIERIA', 'Rediseño motor WARP', 'Proyecto para diseñar y desarrollar un nuevo motor de curvatura más eficiente y potente.', '2024-04-15', '2026-04-15', 'activo'),
(2, 2, 'INGENIERIA', 'Mejora de sistemas de propulsión', 'Proyecto para mejorar los sistemas de propulsión de la naves con tecnologías más avanzadas y eficientes.', '2025-04-15', '2025-12-31', 'proyectado'),
(3, 3, 'CIENCIA', 'Investigación de nuevos materiales', 'Proyecto de investigación para descubrir y estudiar nuevos materiales con propiedades innovadoras para su aplicación en la industria espacial.', '2024-04-15', '2027-04-15', 'activo'),
(4, 3, 'CIENCIA', 'Exploración de exoplanetas', 'Proyecto para explorar y estudiar exoplanetas en busca de indicios de vida y características habitables.', '2024-04-15', '2032-06-30', 'activo'),
(5, 4, 'NAVEGACION', 'Desarrollo de sistemas de navegación avanzados', 'Proyecto para desarrollar sistemas de navegación avanzados que permitan la exploración y colonización de sistemas estelares distantes.', '2024-04-15', '2026-04-15', 'activo'),
(6, 4, 'NAVEGACION', 'Optimización de rutas espaciales', 'Proyecto para optimizar las rutas de viaje espacial y reducir los tiempos de viaje entre sistemas estelares.', '2024-04-15', '2033-12-31', 'activo');

insert into navegante_en_proyecto(id, id_navegante, id_proyecto, fecha_incorporacion, dias_asignados) values
(1, 2, 1, '2024-04-15', 700),
(2, 5, 1, '2024-04-15', 550),
(3, 6, 1, '2024-04-15', 700),
(4, 10, 1, '2024-04-15', 500),
(5, 11, 1, '2024-04-15', 600),
(6, 2, 2, '2025-04-15', 260),
(7, 5, 2, '2025-04-15', 150),
(8, 9, 2, '2025-04-15', 260),
(9, 3, 3, '2024-04-15', 1095),
(10, 7, 3, '2024-04-15', 1095),
(11, 10, 3, '2024-04-15', 1095),
(12, 5, 3, '2024-04-15', 250),
(13, 12, 3, '2024-04-15', 250),
(14, 3, 4, '2024-04-15', 2998),
(15, 13, 4, '2024-04-15', 2998),
(16, 15, 4, '2024-04-15', 2998),
(17, 9, 4, '2024-04-15', 2998),
(18, 4, 5, '2024-04-15', 730),
(19, 5, 5, '2024-04-15', 450),
(20, 14, 5, '2024-04-15', 730),
(21, 15, 5, '2024-04-15', 730),
(22, 4, 6, '2024-04-15', 3547),
(23, 8, 6, '2024-04-15', 3547),
(24, 11, 6, '2024-04-15', 3547);

insert into tareas(id, responsable, campo, nombre, descripcion, frecuencia) values
(1, 2, 'INGENIERIA', 'Mantenimiento de motores', 'Realizar inspección y mantenimiento rutinario de los motores de la nave.', 'semanal'),
(2, 2, 'INGENIERIA', 'Reparación de sistemas de soporte vital', 'Reparar y mantener los sistemas de soporte vital de la nave, como los sistemas de aire, agua y reciclaje de residuos.', 'diaria'),
(3, 2, 'INGENIERIA', 'Mantenimiento exterior nave', 'Realizar mantenimiento en el exterior de la nave, incluyendo el casco, antenas de comunicaciones y sistemas de defensa.', 'mensual'),
(4, 2, 'INGENIERIA', 'Gestion de sistemas informaticos', 'Administrar y mantener los sistemas informáticos de la nave, incluyendo software de navegación y sistemas de seguridad.', 'semanal'),
(5, 2, 'INGENIERIA', 'Reparación de sistemas eléctricos', 'Realizar reparaciones y mantenimiento de los sistemas eléctricos de la nave, incluyendo cableado y paneles solares.', 'mensual'),
(6, 3, 'CIENCIA', 'Monitoreo de sistemas de investigación', 'Monitorear y mantener los sistemas de investigación científica a bordo de la nave, asegurando su funcionamiento óptimo durante experimentos.', 'semanal'),
(7, 3, 'CIENCIA', 'Procesamiento de datos científicos', 'Procesar y analizar datos recopilados por los instrumentos científicos de la nave para su posterior estudio y análisis.', 'diaria'),
(8, 3, 'CIENCIA', 'Labores sanitarias', 'Realizar labores sanitarias a bordo de la nave, incluyendo atención médica básica y mantenimiento de la salud de la tripulación.', 'diaria'),
(9, 3, 'CIENCIA', 'Análisis de muestras planetarias', 'Analizar muestras recogidas en planetas o cuerpos celestes visitados por la nave para estudiar su composición y origen.', 'trimestral'),
(10, 3, 'CIENCIA', 'Calibración de instrumentos científicos', 'Calibrar los instrumentos científicos de la nave para garantizar mediciones precisas durante las investigaciones.', 'mensual'),
(11, 4, 'NAVEGACION', 'Actualización de cartografía estelar', 'Actualizar los mapas y cartografía estelar de la nave con información reciente para mejorar la navegación interestelar.', 'semanal'),
(12, 4, 'NAVEGACION', 'Mantenimiento de sistemas de propulsión', 'Realizar mantenimiento y reparaciones en los sistemas de propulsión de la nave para garantizar su correcto funcionamiento durante el viaje.', 'semanal'),
(13, 4, 'NAVEGACION', 'Revisión de trayectoria', 'Revisar y ajustar la trayectoria de la nave según los datos astronómicos y condiciones del espacio para optimizar la navegación.', 'diaria'),
(14, 4, 'NAVEGACION', 'Calibración de sensores de proximidad', 'Calibrar los sensores de proximidad de la nave para detectar y evitar posibles colisiones con objetos en el espacio.', 'semanal'),
(15, 4, 'NAVEGACION', 'Mantenimiento de sistemas de comunicación', 'Realizar mantenimiento y reparaciones en los sistemas de comunicación de la nave para asegurar la comunicación con la Tierra y otras naves.', 'diaria');

insert into navegante_en_tarea (id, id_navegante, id_tarea, fecha_incorporacion, jornada, asignacion) values
(1, 2, 1, '2024-04-15', 'parcial', 'temporal'),
(2, 5, 1, '2024-04-15', 'parcial', 'temporal'),
(3, 2, 2, '2024-04-15', 'parcial', 'indefinida'),
(4, 6, 2, '2024-04-15', 'parcial', 'indefinida'),
(5, 2, 3, '2024-04-15', 'completa', 'temporal'),
(6, 9, 3, '2024-04-15', 'completa', 'temporal'),
(7, 2, 4, '2024-04-15', 'completa', 'indefinida'),
(8, 12, 4, '2024-04-15', 'completa', 'indefinida'),
(9, 2, 5, '2024-04-15', 'parcial', 'temporal'),
(10, 5, 5, '2024-04-15', 'parcial', 'temporal'),
(11, 3, 6, '2024-04-15', 'parcial', 'temporal'),
(12, 7, 6, '2024-04-15', 'parcial', 'temporal'),
(13, 3, 7, '2024-04-15', 'parcial', 'indefinida'),
(14, 10, 7, '2024-04-15', 'parcial', 'indefinida'),
(15, 3, 8, '2024-04-15', 'completa', 'temporal'),
(16, 13, 8, '2024-04-15', 'completa', 'temporal'),
(17, 3, 9, '2024-04-15', 'completa', 'indefinida'),
(18, 7, 9, '2024-04-15', 'completa', 'indefinida'),
(19, 3, 10, '2024-04-15', 'parcial', 'temporal'),
(20, 10, 10, '2024-04-15', 'parcial', 'temporal'),
(21, 4, 11, '2024-04-15', 'completa', 'indefinida'),
(22, 8, 11, '2024-04-15', 'completa', 'indefinida'),
(23, 4, 12, '2024-04-15', 'completa', 'temporal'),
(24, 11, 12, '2024-04-15', 'completa', 'temporal'),
(25, 4, 13, '2024-04-15', 'parcial', 'temporal'),
(26, 14, 13, '2024-04-15', 'parcial', 'temporal'),
(27, 4, 14, '2024-04-15', 'parcial', 'indefinida'),
(28, 15, 14, '2024-04-15', 'parcial', 'indefinida'),
(29, 4, 15, '2024-04-15', 'parcial', 'temporal'),
(30, 8, 15, '2024-04-15', 'parcial', 'temporal');


set foreign_key_checks = 1;