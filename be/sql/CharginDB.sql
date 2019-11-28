create database simple_charging;

use simple_charging;
drop table billing_accounts;
drop table users;
drop table subscriptions;
drop table users_subscriptions;

create table users
(
    id int primary key auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    login varchar(30) unique not null,
    password varchar(30) not null,
    email varchar(40) not null
);

create table billing_accounts
(
    id int primary key auto_increment,
    number_card varchar(19) not null,
    amount int default 0,
    user_id int not null,
    foreign key (user_id) references users(id) on delete cascade
);

create table subscriptions
(
	id int primary key auto_increment,
    name_subscription varchar(20) not null,
    cost int not null    
);

create table users_subscriptions
(
    id int primary key auto_increment,
    period_on varchar(10) not null,
    time_on time,
    user_id int not null,
    subscription_id int not null,
    foreign key (subscription_id) references subscriptions(id),
    foreign key (user_id) references users(id)      
);

insert users(first_name, last_name, login, password, email) 
VALUES
('Yura', 'Minin', 'yura', '1111', 'minin@mail.ru'),
('Yurik', 'Minkin', 'yurik', '1111', 'minin@mail.by');

insert subscriptions(name_subscription, cost)
values
('MS Word', 15),
('MS Excel', 10),
('MS Presentation', 10);

insert billing_accounts(number_card, user_id)
values
('1111 1111 1111 1111', 1),
('2222 2222 2222 2222', 2);

insert users_subscriptions(period_on, user_id, subscription_id)
values
('5', 1, 2);

select SU.name_subscription, SU.cost, US.period_on, US.time_on from subscriptions SU inner join users_subscriptions US
on SU.id = US.subscription_id
where US.user_id = 2;



