/**
 * This file is auto-generated by the Triplit CLI.
 */

import { Schema as S, Roles } from "@triplit/client";
export const roles: Roles = {};
export const schema = S.Collections({
  test: {
    schema: S.Schema({
      id: S.String({ nullable: false, default: S.Default.Id.nanoid() }),
    }),
    relationships: {
      relation: S.RelationById("relatedCollection", "$attr"),
    },
  },
  relatedCollection: {
    schema: S.Schema({
      id: S.String({ nullable: false, default: S.Default.Id.nanoid() }),
    }),
  },
});
