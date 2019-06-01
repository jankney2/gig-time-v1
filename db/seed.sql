create table users (
user_id serial primary key,
user_first_name varchar(50), 
user_last_name varchar(50), 
user_email varchar(50), 
user_phone BIGINT 
)

create table users (
user_id serial primary key,
user_first_name varchar(50), 
user_last_name varchar(50), 
user_email varchar(50), 
user_phone BIGINT 

)

create table gigs (
gig_id serial primary key, 
owning_user int references users(user_id), 
gig_name varchar(100), 
gig_description varchar(400), 
is_billed BOOLEAN
)


create table gigs (
gig_id serial primary key, 
owning_user int references users(user_id), 
gig_name varchar(100), 
gig_description varchar(400), 
is_billed BOOLEAN
)