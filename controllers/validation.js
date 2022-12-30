import { tipeOfClient } from "../index.js";

export function isAdmin(req, res, next) {
  tipeOfClient
    ? next()
    : res
        .status(401)
        .json({
          error: -4,
          descripcion: "Your petition route is not authorized",
          route: req.originalUrl,
        });
}
