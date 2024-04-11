import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { createHash, isValidPass } from "../utils/hash.util.js";
import { users } from "../data/mongoManager.js";
import crypto from "crypto";
import { createToken } from "../utils/jwt.util.js";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        let user = await users.readByEmail(email);
        if (user) return done(null, false);
        const data = req.body;
        data.password = createHash(password);
        data.verifyCode = crypto.randomBytes(6).toString("hex");
        user = await users.create(data);
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const user = await users.readByEmail(email);
        if (!user) {
          return done(null, false);
        }
        const isValid = isValidPass(password, user.password);
        if (!isValid) return done(null, false);
        const token = createToken({ email, role: user.role });
        req.token = token;
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies["token"],
      ]),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    async (payload, done) => {
      try {
        const user = await users.readByEmail(payload.email)
        if (user) {
          user.password = null
          return done(null, user)
        } else {
          return done(null, false)
        }
      } catch (error) {
        done(error)
      }
    }
  )
);

export default passport;
