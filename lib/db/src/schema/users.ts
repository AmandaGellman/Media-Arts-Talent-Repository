import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  city: text("city").notNull().default("Windsor"),
  province: text("province").notNull().default("ON"),
  country: text("country").notNull().default("Canada"),
  role: text("role").notNull().default("user"),
  planName: text("plan_name"),
  profilePhotoUrl: text("profile_photo_url"),
  bannerUrl: text("banner_url"),
  bio: text("bio"),
  jobTitle: text("job_title"),
  talentTags: text("talent_tags").array().notNull().default([]),
  yearsExperience: integer("years_experience"),
  gender: text("gender"),
  age: integer("age"),
  website: text("website"),
  instagram: text("instagram"),
  twitter: text("twitter"),
  linkedin: text("linkedin"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertUserSchema = createInsertSchema(usersTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof usersTable.$inferSelect;
