--insert into roles (nazev, zmenil) values ("heroes-component", 3)

CREATE TABLE "role" (
	"id" SERIAL primary key,
	"name" TEXT unique not null,
	"changed_on" TIMESTAMP not null default CURRENT_TIMESTAMP,
	"changed_by" INTEGER not null references "user" (id)
)

CREATE TABLE "permission" (
	"id" SERIAL primary key,
	"name" TEXT unique not null,
	"changed_on" TIMESTAMP not null default CURRENT_TIMESTAMP,
	"changed_by" INTEGER not null references "user" (id)
)

CREATE TABLE "user_role" (
	"user" INTEGER not null references "user" (id),
	"role" INTEGER not null references role (id),
	"changed_on" TIMESTAMP not null default CURRENT_TIMESTAMP,
	"changed_by" INTEGER not null references "user" (id)
)

CREATE TABLE "role_permission" (
	"role" INTEGER not null references "user" (id),
	"permission" INTEGER not null references permission (id),
	"changed_on" TIMESTAMP not null default CURRENT_TIMESTAMP,
	"changed_by" INTEGER not null references "user" (id)
)

CREATE TABLE "roles" (
	"id" SERIAL primary key,
	"nazev" TEXT unique not null,
	"zmeneno" TIMESTAMP not null default CURRENT_TIMESTAMP,
	"zmenil" integer references users (id)
)

-- predelat
CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  social_id varchar(64) DEFAULT NULL,
  name varchar(64) NOT NULL,
  username varchar(64) NOT NULL,
  email varchar(64) DEFAULT NULL,
  password varchar(64) DEFAULT NULL,
  profile_picture varchar(256) NOT NULL,
  provider varchar(64) NOT NULL,
  last_active integer DEFAULT NULL,
  access_token varchar(256) DEFAULT NULL,
  access_token_secret varchar(256) DEFAULT NULL,
  refresh_token varchar(128) DEFAULT NULL
)

delete from users

