import { Logger, Config, Errors, Response } from "../Toolbox/index";
const { AsyncStorage } = require("react-native");
//const Parse = require("parse/react-native.js");
const Parse = require("parse/node");

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = Config.Back4App.Url;
Parse.initialize(
  Config.Back4App.ApplicationId,
  Config.Back4App.JavascriptKey,
  Config.Back4App.MasterKey
);
const signUp = async data => {
  const user = new Parse.User();
  user.set("username", data.username);
  user.set("email", data.email);
  user.set("adi", data.adi);
  user.set("soyadi", data.soyadi);
  user.set("cepTelefonu", data.cepTelefonu);
  user.set("password", data.password);

  // return user
  //   .signUp()
  //   .then(user => {
  //     console.log("User signed up", JSON.stringify(user));
  //     return Response.success(JSON.stringify(user));
  //   })
  //   .catch(error => {
  //     return Response.error(error);
  //   });

  return user
    .signUp()
    .then(response => {
      return Response.success(JSON.stringify(user));
    })
    .catch(error => {
      Logger.log(error);
      return Response.error(error);
    });
};

const logOut = () => {
  Parse.User.logOut();
};

const logIn = data => {
  return Parse.User.logIn(data.username, data.password)
    .then(response => {
      Logger.log(response);
      return response;
    })
    .catch(error => {
      Logger.log(error);
      throw error;
    });
};

const getRefUser = email => {
  const UserReferans = Parse.Object.extend("UserReferans");
  const query = new Parse.Query(UserReferans);
  query.equalTo("Email", email);
  return query.find().then(
    results => {
      Logger.log(results);
      return results;
    },
    error => {
      Logger.log(error);
      throw error;
    }
  );
};

const disableRefUser = id => {
  const UserReferans = Parse.Object.extend("UserReferans");
  const query = new Parse.Query(UserReferans);

  return query.get(id).then(object => {
    object.set("Kayit", true);
    object.save().then(
      response => {
        Logger.log("Kullanıcı ana tabloya kayıt edildi");
        return true;
      },
      error => {
        Logger.log(error);
        throw error;
      }
    );
  });
};

const passwordRecovery = email => {
  return Parse.User.requestPasswordReset(email)
    .then(() => {
      Logger.log("Kullanıcıya parola değiştirme maili gönderildi");
      return true;
    })
    .catch(error => {
      Logger.log(error);
      throw error;
    });
};

export default {
  signUp,
  logIn,
  getRefUser,
  logOut,
  disableRefUser,
  passwordRecovery
};
