DROP TABLE "accounts" CASCADE;--> statement-breakpoint
DROP TABLE "sessions" CASCADE;--> statement-breakpoint
DROP TABLE "verifications" CASCADE;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "emailVerified";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "image";