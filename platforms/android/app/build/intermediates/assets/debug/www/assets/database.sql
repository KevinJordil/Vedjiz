-- Creator:       MySQL Workbench 6.3.10/ExportSQLite Plugin 0.1.0
-- Author:        Xavier
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2018-05-22 09:20
-- Created:       2018-05-22 08:17
PRAGMA foreign_keys = OFF;

-- Schema: vedjiz
ATTACH "vedjiz.sdb" AS "vedjiz";
BEGIN;
CREATE TABLE "vedjiz"."locations"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "NPA" INTEGER NOT NULL,
  "city" VARCHAR(45) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);
CREATE TABLE "vedjiz"."units"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "unitName" VARCHAR(45) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);
CREATE TABLE "vedjiz"."users"(
  "id" INTEGER PRIMARY KEY NOT NULL,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "companyName" VARCHAR(255),
  "phone" VARCHAR(255) NOT NULL,
  "address" VARCHAR(255) NOT NULL,
  "location_id" INTEGER NOT NULL,
  "userType" INTEGER NOT NULL DEFAULT 0,
--   0: Customer
--   1: Admin
--   2: Delivery
--   3: Supplier (of vegetables)
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT "location"
    FOREIGN KEY("location_id")
    REFERENCES "locations"("id")
);
CREATE INDEX "vedjiz"."users.location_idx" ON "users" ("location_id");
CREATE TABLE "vedjiz"."products"(
  "id" INTEGER PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "unit_id" INTEGER,
  "stock" FLOAT NOT NULL,
  "picture" TEXT NOT NULL,
  "price" FLOAT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT "unit"
    FOREIGN KEY("unit_id")
    REFERENCES "units"("id")
);
CREATE INDEX "vedjiz"."products.unit_idx" ON "products" ("unit_id");
CREATE TABLE "vedjiz"."orders"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "orderDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "deliveryDate" TIMESTAMP,
  "delivered_by_id" INTEGER,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT "delivery"
    FOREIGN KEY("delivered_by_id")
    REFERENCES "users"("id")
);
CREATE INDEX "vedjiz"."orders.delivery_idx" ON "orders" ("delivered_by_id");
CREATE TABLE "vedjiz"."orderItems"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "order_id" INTEGER NOT NULL,
  "product_id" INTEGER NOT NULL,
  "quantity" FLOAT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT "order"
    FOREIGN KEY("order_id")
    REFERENCES "orders"("id"),
  CONSTRAINT "product"
    FOREIGN KEY("product_id")
    REFERENCES "products"("id")
);
CREATE INDEX "vedjiz"."orderItems.product_idx" ON "orderItems" ("product_id");
CREATE INDEX "vedjiz"."orderItems.order_idx" ON "orderItems" ("order_id");
CREATE TABLE "vedjiz"."product_supplier"(
  "product_id" INTEGER NOT NULL,
  "supplier_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  CONSTRAINT "product_supplier_ibfk_1"
    FOREIGN KEY("product_id")
    REFERENCES "products"("id"),
  CONSTRAINT "product_supplier_ibfk_2"
    FOREIGN KEY("supplier_id")
    REFERENCES "users"("id")
);
CREATE INDEX "vedjiz"."product_supplier.product_id" ON "product_supplier" ("product_id");
CREATE INDEX "vedjiz"."product_supplier.supplier_id" ON "product_supplier" ("supplier_id");
COMMIT;
