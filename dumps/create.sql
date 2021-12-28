-- schema
create database simonecelia;

-- table
create table message
(
    id            int auto_increment                    primary key,
    fromName      varchar(256)                          null,
    fromEmail     varchar(256)                          null,
    fromSubject   varchar(256)                          null,
    fromMessage   varchar(8192)                         null,
    fromTimestamp timestamp default current_timestamp() null
);
